import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { QuizDetails, StandardReponse } from "../model/quiz-dashboard.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn:  'root'
})
    
export class QuizDashboardService {
    
    private url = 'http://localhost:4545/addQuizData';
    private fetchUrl = 'http://localhost:4545/getBulkQuizData';
    private loginUrl = 'http://localhost:9090/auth/login';
    private mockUrl: string = 'https://run.mocky.io/v3/cbcea26a-0b83-4112-a3e8-2002fd5fa4a8';
    
    constructor(private http: HttpClient) { }
    
    postQuizDetails(quizDetails: QuizDetails): Observable<StandardReponse> { 

        const token = localStorage.getItem('token')?.replaceAll('"',''); // or get it from a service
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        console.log('here quizDetails', quizDetails);
        return this.http.post<StandardReponse>(this.url, quizDetails, { headers });
    }

    getQuizDetails(): Observable<QuizDetails[]> {
        // const token = localStorage.getItem('token')?.replaceAll('"',''); // or get it from a service
        // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get<QuizDetails[]>(this.fetchUrl);
    }
}