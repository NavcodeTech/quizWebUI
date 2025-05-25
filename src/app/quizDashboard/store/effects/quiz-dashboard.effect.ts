import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { QuizDashboardService } from "../../service/quiz-dashboad.service";
import { QuizDashboardActions } from "../action/quiz-dashboard.action";
import { catchError, map, of, switchMap } from "rxjs";
import { QuizDetails, StandardReponse } from "../../model/quiz-dashboard.model";

@Injectable()
export class QuizDashboardEffects {
  constructor(
    private actions$: Actions,
    private quizService: QuizDashboardService
  ) {}

    quizPost$ = createEffect(() =>
      this.actions$.pipe(
        ofType(QuizDashboardActions.postQuizDetails),
        switchMap(({ quizDetails }) =>
          this.quizService.postQuizDetails(quizDetails).pipe(
            map((response: StandardReponse) => QuizDashboardActions.postQuizDetailsSuccess({ successResponse: response })),
            catchError(error => of(QuizDashboardActions.postQuizDetailsFailure({ error })))
          )
        )
      )
    );

    quizFetch$ = createEffect(() =>
      this.actions$.pipe(
        ofType(QuizDashboardActions.getQuizDetails),
        switchMap(() =>
          this.quizService.getQuizDetails().pipe(
            map((quizDetails: QuizDetails[]) => QuizDashboardActions.getQuizDetailsSuccess({ quizDetails })),
            catchError(error => of(QuizDashboardActions.getQuizDetailsFailure()))
          )
        )
      )
    );
}