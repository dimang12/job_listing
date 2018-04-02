import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { JobComponent} from './job/job.component';
import { LocationComponent} from './location/location.component';
import { AccountComponent} from './account/account.component';
import { CompanyComponent } from './company/company.component';
import { CategoryComponent } from './category/category.component';
import { ResumeComponent } from './resume/resume.component';
import {AppliedJobComponent} from './applied-job/applied-job.component';
import {SavedJobComponent} from './saved-job/saved-job.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignOutComponent} from './sign-out/sign-out.component';
import {SignUpComponent} from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'job', component: JobComponent},
  {path: 'location', component: LocationComponent},
  {path: 'companies', component: CompanyComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'account', component: AccountComponent, children: [
      {path: '', component: ResumeComponent},
      {path: 'applied-job', component: AppliedJobComponent},
      {path: 'saved-job', component: SavedJobComponent},
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-out', component: SignOutComponent},
      {path: 'sign-up', component: SignUpComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
