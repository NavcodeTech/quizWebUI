import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuizDashboardAppStoreModel } from '../store/store-model/quiz-dashboard-store.model';
import { Store } from '@ngrx/store';
import { QuizDashboardActions } from '../store/action/quiz-dashboard.action';
import { quizDashboardFeature } from '../store/features/quiz-dashboard.features';
import { map, Observable } from 'rxjs';
import { QuizDetails } from '../model/quiz-dashboard.model';

@Component({
  selector: 'app-quiz-table',
  templateUrl: './quiz-table.component.html',
  styleUrls: ['./quiz-table.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class QuizTableComponent implements OnInit {
   quizzes = [
    {
      id: 1,
      title: 'Sample Quiz',
      description: 'This is a sample quiz.',
      category: 'General Knowledge',
      createdBy: 'Admin',
      questionPublished: true,
      timeLimit: 30,
      randomizeQuestion: false,
      maxAttempts: 3,
      fullMarks: 100,
      questionList: [
        { text: 'What is the capital of France?' },
        { text: 'What is 2 + 2?' }
      ]
    },
    {
      id: 1,
      title: 'Sample Quiz2',
      description: 'This is a sample quiz.',
      category: 'General Knowledge',
      createdBy: 'Admin',
      questionPublished: true,
      timeLimit: 30,
      randomizeQuestion: false,
      maxAttempts: 3,
      fullMarks: 100,
      questionList: [
        { text: 'What is the capital of France?' },
        { text: 'What is 2 + 2?' }
      ]
    }
    // Add more quiz objects here
  ];
  public quizDetailsList!: QuizDetails[];
  public quizDetailsStream!: Observable<QuizDetails[]>;
  constructor(private store: Store<QuizDashboardAppStoreModel>) { }
  ngOnInit(): void {
    this.store.dispatch(QuizDashboardActions.postQuizDetails({
      quizDetails: {
        id: 1012,
        title: 'Fronted Quiz',
        description: 'www',
        category: 'Angular',
        createdBy: 'qqq',
        questionPublished: false,
        timeLimit: '2',
        randomizeQuestion: false,
        maxAttempts: 0,
        fullMarks: 0,
        questionList: [{
          questionText: 'What is commoand for angular build?',
          questionType: 'Quiz',
          points: 1,
          options: ['npm', 'yern', 'git'],
          correctAnswer: ['npm']
        }]
      }
    }));
    this.store.dispatch(QuizDashboardActions.getQuizDetails());
    this.quizDetailsStream = this.store.select(quizDashboardFeature.selectQuizDetails).pipe(map((quizDetails: QuizDetails[]) => {
      console.log('Quiz Details:', quizDetails);
      this.quizDetailsList = quizDetails;
      return quizDetails;
    }));
  }
}
