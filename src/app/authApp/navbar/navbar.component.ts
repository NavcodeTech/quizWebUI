import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostState } from '../store/storeModel/authApp.store.model';
import { postFeature } from '../store/features/authApp.feature';
import { map } from 'rxjs';
import { LoginResponse, StandardReponse } from '../model/userModel';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent implements OnInit {
  public userLoggedIn!: string;
  constructor(private appStore: Store<PostState>){}
  ngOnInit(): void {
    this.userLoggedIn = localStorage.getItem('loggedInUser') as string;
    console.log(this.userLoggedIn, this.userLoggedIn?.length);
  }
}
