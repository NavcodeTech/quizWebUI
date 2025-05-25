import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './authApp/store/effects/authApp.effect';
import { postFeature } from './authApp/store/features/authApp.feature';
import { NavbarComponent } from './authApp/navbar/navbar.component';
import { DashbaordComponent } from './quizDashboard/dashbaord/dashbaord.component';
import { QuizTableComponent } from './quizDashboard/quiz-table/quiz-table.component';
import { QuizDashboardEffects } from './quizDashboard/store/effects/quiz-dashboard.effect';
import { quizDashboardSlicesLists } from './quizDashboard/quiz-dashboard-slices-lists';
import { quizDashboardSlice } from './quizDashboard/store/features/quiz-dashboard.features';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    EffectsModule.forRoot([
      QuizDashboardEffects
    ]),
    StoreModule.forRoot({}),
    EffectsModule.forFeature([PostEffects, QuizDashboardEffects]),
    StoreModule.forFeature(postFeature),
    StoreModule.forFeature('quizDashboardSlice', quizDashboardSlice),
    NavbarComponent,
    QuizTableComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
