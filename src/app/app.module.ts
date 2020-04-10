import { ReplyComponent } from './components/reply/reply.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AccountComponent } from './pages/account/account.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ReplyPageComponent } from './pages/reply-page/reply-page.component';
import { AllRepliesComponent } from './pages/all-replies/all-replies.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    AccountComponent,
    FooterComponent,
    ReplyPageComponent,
    AllRepliesComponent,
    ReplyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }