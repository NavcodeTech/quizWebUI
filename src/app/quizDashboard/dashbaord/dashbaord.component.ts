import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PostState } from 'src/app/authApp/store/storeModel/authApp.store.model';
import { QuizTableComponent } from '../quiz-table/quiz-table.component';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuizDashboardActions } from '../store/action/quiz-dashboard.action';

@Component({
  selector: 'app-dashbaord',
  standalone: true,
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css'],
  imports: [CommonModule, QuizTableComponent, ReactiveFormsModule]
})
export class DashbaordComponent implements OnInit{
  public userLoggedIn!: string;
  quizForm!: FormGroup;
  questionInputForm!: FormGroup;
  isAddingQuestion = false;

  constructor(private appStore: Store<PostState>,
    private route: Router,
    private fb: FormBuilder,
    private store: Store<PostState>
  ){}
  ngOnInit(): void {
    this.userLoggedIn = JSON.stringify(localStorage.getItem('loggedInUser')) as string;
    console.log(this.userLoggedIn);
    this.quizForm = this.fb.group({
      title: [''],
      description: [''],
      category: [''],
      createdBy: [''],
      questionPublished: [false],
      timeLimit: [''],
      randomizeQuestion: [false],
      maxAttempts: [0],
      fullMarks: [0],
      questionList: this.fb.array([])
    });
    this.initQuestionInputForm(); // Initialize the question input form
  }

  logout(): void {
    localStorage.clear();
    this.route.navigate(['/login']);
  }

  get questionList(): FormArray {
    return this.quizForm.get('questionList') as FormArray;
  }

  initQuestionInputForm(): void {
    this.questionInputForm = this.fb.group({
      questionText: [''],
      questionType: [''],
      points: [0],
      options: this.fb.array([this.fb.control('')]),
      correctAnswer: this.fb.array([this.fb.control('')])
    });
  }

  get options(): FormArray {
    return this.questionInputForm.get('options') as FormArray;
  }

  get correctAnswer(): FormArray {
    return this.questionInputForm.get('correctAnswer') as FormArray;
  }

  addOption() {
    this.options.push(this.fb.control(''));
  }

  removeOption(index: number) {
    this.options.removeAt(index);
  }

  addCorrectAnswer() {
    this.correctAnswer.push(this.fb.control(''));
  }

  removeCorrectAnswer(index: number) {
    this.correctAnswer.removeAt(index);
  }

  startAddingQuestion() {
    this.initQuestionInputForm(); // Reset the input form
    this.isAddingQuestion = true;
  }

  saveQuestion() {
    if (this.questionInputForm.valid) {
      const questionGroup = this.fb.group({
      questionText: [this.questionInputForm.value.questionText],
      questionType: [this.questionInputForm.value.questionType],
      points: [this.questionInputForm.value.points],
      options: this.fb.array(this.questionInputForm.value.options.map((opt: any) => this.fb.control(opt))),
      correctAnswer: this.fb.array(this.questionInputForm.value.correctAnswer.map((ans: any) => this.fb.control(ans)))
    });

    this.questionList.push(questionGroup);
      this.initQuestionInputForm(); // reset for next question
    }
  }

  doneAddingQuestions() {
    this.isAddingQuestion = false;
  }

  removeQuestion(index: number) {
    this.questionList.removeAt(index);
  }

  createQuiz() {
    console.log(this.quizForm.value);
    this.store.dispatch(QuizDashboardActions.postQuizDetails({
      quizDetails: this.quizForm.value
    }));
  }
}
