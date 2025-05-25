import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostApiActions } from '../action/authApp.action';
import { LoginResponse, Post, StandardReponse, SuccessResponse } from '../../model/userModel';
import { AuthAppService } from '../../service/auth.service';

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthAppService
  ) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostApiActions.loadPosts),
      switchMap(() =>
        this.authService.getPosts().pipe(
          map((posts: Post[]) => PostApiActions.loadPostsSuccess({ posts })),
          catchError(error => of(PostApiActions.loadPostsFailure({ error })))
        )
      )
    )
  );
  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostApiActions.loginUser),
      switchMap(({ loginData }) =>
        this.authService.loginService(loginData).pipe(
          map((loginResponse: LoginResponse) => PostApiActions.loginUserSuccess({ loginResponse })),
          catchError(error => of(PostApiActions.loginUserFailure({ error })))
        )
      )
    )
  );
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostApiActions.registerUser),
      switchMap(({ registerData }) =>
        this.authService.registerService(registerData).pipe(
          map((response: StandardReponse) => PostApiActions.registerUserSuccess({ registerResponse: response })),
          catchError(error => of(PostApiActions.registerUserFailure({ error })))
        )
      )
    )
  );
}
