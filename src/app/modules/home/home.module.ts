import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LogoComponent } from './pages/login/logo/logo.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, LogoComponent],
  imports: [CommonModule, RouterModule, BrowserModule],
})
export class HomeModule {}
