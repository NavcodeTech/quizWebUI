import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-table',
  templateUrl: './quiz-table.component.html',
  styleUrls: ['./quiz-table.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class QuizTableComponent {
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
}
