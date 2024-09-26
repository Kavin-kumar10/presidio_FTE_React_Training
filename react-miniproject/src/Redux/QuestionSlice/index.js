import { createSlice } from "@reduxjs/toolkit";
import { currQuestion } from "../QuizSlice";

const initialState = {
    index:0,
    CurrentQuestion:currQuestion,
    options:{}
}

export const QuestionSlice = createSlice({
    name:'Question',
    initialState,
    reducers:{

    }}
)

export const {} = QuestionSlice.actions;

export default QuestionSlice.reducer
