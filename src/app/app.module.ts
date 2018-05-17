import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { CategoryComponent } from './category/category.component';
import { LocationComponent } from './location/location.component';
import { CompanyComponent } from './company/company.component';
import { ResumeComponent } from './resume/resume.component';
import { AppliedJobComponent } from './applied-job/applied-job.component';
import { SavedJobComponent } from './saved-job/saved-job.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { ResumeService } from './services/resume.service';
import { HttpClientModule } from '@angular/common/http';
import { CityService } from './services/city.service';
import { JobService } from './services/job.service';

import {JoblistLocaitonComponent} from './location/joblist.locaiton.component';
import {HomeLocationComponent} from './location/home/home.location.component';

import {DetailJobComponent} from './job/detail/detail.job.component';
import {JobsService} from './services/jobs.service';
import {HomeCompanyComponent} from './company/home/home.company.component';
import {CompanyService} from './services/company.service';
import {ListCompanyComponent} from './company/list/list.company.component';


@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
      DetailJobComponent,
    HomeComponent,
    AccountComponent,
    CategoryComponent,
    LocationComponent,
      JoblistLocaitonComponent,
      HomeLocationComponent,
    CompanyComponent,
      HomeCompanyComponent,
      ListCompanyComponent,
    ResumeComponent,
    AppliedJobComponent,
    SavedJobComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ResumeService,
    CityService,
    JobService,
    JobsService,
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
