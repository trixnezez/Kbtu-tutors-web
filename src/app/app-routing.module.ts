import { AllRepliesComponent } from './pages/all-replies/all-replies.component';
import { ReplyPageComponent } from './pages/reply-page/reply-page.component';
import { AccountComponent } from './pages/account/account.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'account', component: AccountComponent },
  { path: 'reply', component: ReplyPageComponent },
  { path: 'all-replies', component: AllRepliesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
