import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    AllCategory:[],
    CategoryPop:false,
    SubmitPopState:false,
    timePopState:false,
    params:{
        Category:null,
        CategoryName:"",
        Difficulty:"easy"
    },
    Questions:[],
    index:0,
    CurrentQuestion:{},
    ChoosenOptions:[],
    Score:null,
    loading:false,
    error:null
}

export const fetchCategories = createAsyncThunk(
    'Quiz/GetCategories',
    async () => {
        const response = await axios.get(`https://opentdb.com/api_category.php`);
        console.log(response.data);
        return response.data.trivia_categories;
    }
);

export const fetchQuizQuestions = createAsyncThunk(
    'Quiz/fetchQuizQuestions',
    async (_, { getState }) => {
        const { params } = getState().Quiz;        
        const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=${params.Category}&difficulty=${params.Difficulty}`);
        console.log(response.data);
        return response.data.results;
    }
);

const shuffleAnswers = (answers) => {
    return answers
      .map((answer) => ({ answer, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ answer }) => answer);
};


export const QuizSlice = createSlice({
    name:'Quiz',
    initialState,
    reducers:{
        setParams:(state,action)=>{
            state.params.Category = action.payload.Category;
            state.params.CategoryName = action.payload.CategoryName;
            state.params.Difficulty = action.payload.Difficulty;
            state.index = 0;
            state.CategoryPop = true;
            state.ChoosenOptions = []
        },
        setDifficulty:(state,action)=>{
            state.params.Difficulty = action.payload.Difficulty;
        },
        setSubmitPop:(state,action)=>{
            state.SubmitPopState = action.payload;
        },
        setTimePop:(state,action)=>{
            state.timePopState = action.payload;
        },
        closePop:(state,action)=>{
            state.CategoryPop = false;
            state.params.Category = "";
            state.params.Difficulty = "";
        },
        startQuiz(state) {
            state.index = 0;
            const question = state.Questions[state.index];
            state.CurrentQuestion = {
              ...question,
              allAnswers: shuffleAnswers([question.correct_answer, ...question.incorrect_answers])
            };
        },
        prevQuestion(state) {
            if (state.index > 0) {
                state.index -= 1;
                const question = state.Questions[state.index];
                state.CurrentQuestion = {
                ...question,
                allAnswers: shuffleAnswers([question.correct_answer, ...question.incorrect_answers])
                };
            }
        },
        nextQuestion(state) {
            if (state.index < state.Questions.length - 1) {
                state.index += 1;
                const question = state.Questions[state.index];
                state.CurrentQuestion = {
                ...question,
                allAnswers: shuffleAnswers([question.correct_answer, ...question.incorrect_answers])
                };
            }
        },
        calculateScore: (state) => {
            let score = 0;
            for (let i = 0; i < state.Questions.length; i++) {
                if (state.ChoosenOptions[i] === state.Questions[i].correct_answer) {
                score += 1;
                }
            }
            state.Score = score;
        },
        chooseOption:(state,action)=>{
            state.ChoosenOptions[state.index] = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuizQuestions.pending, (state) => {
                state.loading = true; 
            })
            .addCase(fetchQuizQuestions.fulfilled, (state, action) => {
                state.loading = false;
                state.Questions = action.payload;
                // Start quiz immediately after questions are fetched
                state.index = 0;
                const question = state.Questions[state.index];
                state.CurrentQuestion = {
                  ...question,
                  allAnswers: shuffleAnswers([
                    question.correct_answer,
                    ...question.incorrect_answers,
                  ]),
                };
              })
            .addCase(fetchQuizQuestions.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.error.message;
            });
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true; 
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.AllCategory = action.payload; 
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.error.message;
            });
    }
})

export const {setParams,closePop,setDifficulty,nextQuestion,startQuiz,setSubmitPop,prevQuestion,chooseOption,calculateScore,setTimePop} = QuizSlice.actions;
export const currQuestion = (state) => state.CurrentQuestion;

export default QuizSlice.reducer

