import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { CategoryComponent } from './category/category.component';
import { LocationComponent } from './location/location.component';
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    HomeComponent,
    AccountComponent,
    CategoryComponent,
    LocationComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
