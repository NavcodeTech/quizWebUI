import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthAppService } from '../service/auth.service';
import { map, Observable } from 'rxjs';
import { PostState } from '../store/storeModel/authApp.store.model';
import { Store } from '@ngrx/store';
import { postFeature } from '../store/features/authApp.feature';
import { PostApiActions } from '../store/action/authApp.action';
import { Router } from '@angular/router';
import { LoginResponse } from '../model/userModel';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  loginPage: boolean = true;
  registerForm: FormGroup;
  loginResponseData!: LoginResponse;
  public loginResponseStream!: Observable<LoginResponse>;

  constructor(private fb:FormBuilder,
    private authAppService: AuthAppService,
    private store: Store<PostState>,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.loginPage = this.router.url.includes('/login');
    this.loginResponseStream = this.store.select(postFeature.selectLoginResponse).pipe(map((loginResponse: LoginResponse): LoginResponse => {
       console.log(loginResponse);
         if (loginResponse.token.length > 0) {
          this.loginResponseData = loginResponse;
          console.log('loggged in user',);
          localStorage.setItem('loggedInUser', JSON.stringify(this.loginForm.value.email));
          this.router.navigate(['/dashboard']);
         }
          return loginResponse;
    }));
    this.authAppService.getPosts().pipe(map((value) => {
      console.log(value);
    }));
    this.store.dispatch(PostApiActions.loadPosts());
    this.store.select(postFeature.selectPosts).subscribe(posts => {
      console.log(posts);
    });
    
  }

  loginFunc(): void {
    
  }

  registerPage(event: any): void {
    event.preventDefault();
    console.log('change');
    this.loginPage = false;
  }

  showLoginPage(event: any): void {
    event.preventDefault();
    this.loginPage = true;
  }

  registerFunc(): void {

  }

  submitLogin(): void{
    console.log(this.loginForm.value);
    this.store.dispatch(PostApiActions.loginUser({loginData: this.loginForm.value}));
  }

  createUser(): void {
    console.log(this.registerForm.value);
    this.store.dispatch(PostApiActions.registerUser({registerData: this.registerForm.value}));
  }
}
