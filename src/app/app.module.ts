import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewTaskPageComponent } from './new-task-page/new-task-page.component';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes : Routes = [
  {path:'create-task',component: NewTaskPageComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewTaskPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
