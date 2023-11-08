import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TimeComponent } from "./time/time.component";

const routes: Routes = [
  {path:'todo', component:TodoComponent},
  {path:'time', component: TimeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
