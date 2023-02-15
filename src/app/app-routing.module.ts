import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  // {
  //   path:'/',
  //   component:AppComponent

  // },
  {
  path:'first',
  component:FirstComponent
  },
  {
    path:'second',
    component:SecondComponent
  },
  {
    path:'third',
    component:ThirdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
