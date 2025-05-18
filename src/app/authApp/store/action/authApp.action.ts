import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { LoginResponse, LoginUser, Post, RegisterUser, StandardReponse, SuccessResponse } from "../../model/userModel";

export const PostApiActions = createActionGroup({
    source: 'Post API',
    events: {
      'Load Posts': emptyProps(),
      'Load Posts Success': props<{ posts: Post[] }>(),
      'Load Posts Failure': props<{ error: any }>(),
      'Login User': props<{ loginData: LoginUser }>(),
      'Login User Success': props<{ loginResponse: LoginResponse }>(),
      'Login User Failure': props<{ error: any }>(),
      'Register User': props<{ registerData: RegisterUser }>(),
      'Register User Success': props<{ registerResponse: StandardReponse }>(),
      'Register User Failure': props<{ error: any }>()
    },
  });