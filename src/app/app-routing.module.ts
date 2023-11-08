import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TimeComponent } from "./time/time.component";
import { NotesComponent } from "./notes/notes.component";
import {DrawingComponent } from"./drawing/drawing.component";

const routes: Routes = [
  {path:'todo', component:TodoComponent},
  {path:'time', component: TimeComponent},
  {path:'notes', component: NotesComponent},
  {path: 'drawing', component: DrawingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
