import { LoginResponse, Post, StandardReponse, SuccessResponse } from "../../model/userModel";

export interface PostState {
    posts: Post[];
    errMsg: any;
    loading: boolean;   
    response: SuccessResponse; 
    registerResponse: StandardReponse;
    loginResponse: LoginResponse;
}