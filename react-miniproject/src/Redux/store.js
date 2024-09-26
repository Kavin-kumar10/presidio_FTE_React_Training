import { configureStore } from "@reduxjs/toolkit";
import QuizSlice from "./QuizSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { QuestionSlice } from "./QuestionSlice";
import logger from "redux-logger";



export const store = configureStore({
    reducer: {
        Quiz:QuizSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
})