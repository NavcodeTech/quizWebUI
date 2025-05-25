import { Action, createFeature, createReducer, on } from "@ngrx/store";
import { QuizDashboardAppStoreModel } from "../store-model/quiz-dashboard-store.model";
import { QuizDashboardActions } from "../action/quiz-dashboard.action";
import { QuizDetails } from "../../model/quiz-dashboard.model";

const initialState: QuizDashboardAppStoreModel = {
    quizDetails: []
} 

const quizReducer = createReducer(
  initialState,
  on(QuizDashboardActions.getQuizDetailsSuccess, (state: QuizDashboardAppStoreModel,
     { quizDetails }: {quizDetails: QuizDetails[]}): QuizDashboardAppStoreModel => ({
      ...state,
      quizDetails
 })),
 on(QuizDashboardActions.getQuizDetailsFailure, (state: QuizDashboardAppStoreModel): QuizDashboardAppStoreModel => ({
      ...state,
      quizDetails:[]
 }))
)

export const quizDashboardFeature = createFeature({
  name: 'quizDashboardSlice',
  reducer: quizReducer
});

export function quizDashboardSlice(state: QuizDashboardAppStoreModel, action: Action): QuizDashboardAppStoreModel {
  return quizDashboardFeature.reducer(state, action);
}