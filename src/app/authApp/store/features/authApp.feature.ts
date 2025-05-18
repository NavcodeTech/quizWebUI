import { createFeature, createReducer, on } from "@ngrx/store";
import { PostState } from "../storeModel/authApp.store.model";
import { PostApiActions } from "../action/authApp.action";

const initialState: PostState = {
  posts: [],
  errMsg: undefined,
  loading: false,
  response: {
    response: ''
  },
  registerResponse: {
    httpStatus: "",
    message: ""
  },
  loginResponse: {
    token: "",
    expiresIn: 0
  }
};
  
const postReducer = createReducer(
  initialState,
  on(PostApiActions.loadPosts, state => ({
    ...state,
    errMsg: null,
    loading: true
  })),
  on(PostApiActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    errMsg: null,
    loading: false
  })),
  on(PostApiActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    errMsg: error,
    loading: false
  })),
  on(PostApiActions.loginUserSuccess, (state, { loginResponse }) => ({
    ...state,
    loginResponse
  })),
  on(PostApiActions.loginUserFailure, (state, { error }) => ({
    ...state,
    errMsg: error
  })),
  on(PostApiActions.registerUserSuccess, (state, { registerResponse }) => ({
    ...state,
    registerResponse
  })),
  on(PostApiActions.registerUserFailure, (state, { error }) => ({
    ...state,
    errMsg: error
  }))
);
  
export const postFeature = createFeature({
    name: 'posts',
    reducer: postReducer,
});