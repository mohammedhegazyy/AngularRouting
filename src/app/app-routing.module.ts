import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'Home',component:HomeComponent},
  {path:'Login',component:LoginpageComponent},
  {path:'Signup',component:SignuppageComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents =[HomeComponent,LoginpageComponent,SignuppageComponent] 