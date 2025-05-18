import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PostState } from 'src/app/authApp/store/storeModel/authApp.store.model';
import { QuizTableComponent } from '../quiz-table/quiz-table.component';

@Component({
  selector: 'app-dashbaord',
  standalone: true,
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css'],
  imports: [CommonModule, QuizTableComponent]
})
export class DashbaordComponent implements OnInit{
  public userLoggedIn!: string;
  constructor(private appStore: Store<PostState>,
    private route: Router
  ){}
  ngOnInit(): void {
    this.userLoggedIn = JSON.stringify(localStorage.getItem('loggedInUser')) as string;
    console.log(this.userLoggedIn);
  }

  logout(): void {
    localStorage.clear();
    this.route.navigate(['/login']);
  }

}
