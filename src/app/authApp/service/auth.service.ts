import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginResponse, LoginUser, Post, RegisterUser, StandardReponse, SuccessResponse } from "../model/userModel";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn:  'root'
})
    
export class AuthAppService {
    
    private url = 'http://localhost:9090/auth/signup';
    private loginUrl = 'http://localhost:9090/auth/login';
    private mockUrl: string = 'https://run.mocky.io/v3/cbcea26a-0b83-4112-a3e8-2002fd5fa4a8';
    
    constructor(private http: HttpClient) { }
    
    getPosts(): Observable<Post[]> {
        console.log('here');
        // this.http.get<Post[]>(this.url).subscribe({
        //     next: (posts) => {
        //       console.log('Posts in component:', posts);
        //     },
        //     error: (err) => {
        //       console.error('Error fetching posts:', err);
        //     }
        // })
        return this.http.get<Post[]>(this.url);
    }

    loginService(loginData: LoginUser): Observable<LoginResponse> {
      return this.http.post<LoginResponse>(this.loginUrl, loginData);
    }
    registerService(registerData: RegisterUser): Observable<StandardReponse> {
      return this.http.post<StandardReponse>(this.url, registerData);
    }
}