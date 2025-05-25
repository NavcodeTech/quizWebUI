import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { QuizDetails, StandardReponse } from "../../model/quiz-dashboard.model";

export const QuizDashboardActions = createActionGroup({
    source: 'Quiz Dashboardś',
    events: {
      'Post Quiz Details': props<{ quizDetails: QuizDetails }>(),
      'Post Quiz Details Success': props<{ successResponse: StandardReponse }>(),
      'Post Quiz Details Failure': props<{ error: any }>(),
      'Get Quiz Details': emptyProps(),
      'Get Quiz Details Success': props<{ quizDetails: QuizDetails[] }>(),
      'Get Quiz Details Failure': emptyProps(),
    }
  });