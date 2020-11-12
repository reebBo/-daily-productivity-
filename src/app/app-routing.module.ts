import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
// import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [
  // {
  //   path: "home", component: HomeComponent
  // },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "todos", component: TodosComponent
  }, {
    path: "",
    redirectTo: "todos",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
