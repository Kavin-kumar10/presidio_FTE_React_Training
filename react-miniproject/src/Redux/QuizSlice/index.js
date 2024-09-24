import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    AllCategory:[],
    params:{
        Category:"",
        Difficulty:""
    },
    Questions:[],
    loading:false,
    error:null
}

export const fetchQuizQuestions = createAsyncThunk(
    'Quiz/fetchQuizQuestions',
    async (_, { getState }) => {
        const { params } = getState().Quiz;        
        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${params.Category}&difficulty=${params.Difficulty}`);
        const data = await response.json();
        console.log(data.results);
        return data.results;
    }
);

export const QuizSlice = createSlice({
    name:'Quiz',
    initialState,
    reducers:{
        setParams:(state,action)=>{
            state.params.Category = action.payload.Category;
            state.params.Difficulty = action.payload.Difficulty;
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
            })
            .addCase(fetchQuizQuestions.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.error.message;
            });
    }
})

export default QuizSlice.reducer