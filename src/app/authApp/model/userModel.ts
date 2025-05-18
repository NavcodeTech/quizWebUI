export interface RegisterUser {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface LoginUser {
    email: string;
    password: string; 
}

export interface Post {
    id: number;
    title: string;
    path: string;
} 

export interface SuccessResponse {
    response: string;
}

export interface StandardReponse {
    httpStatus: string;
    message: string;
}

export interface LoginResponse {
    token: string;
    expiresIn: number;
}