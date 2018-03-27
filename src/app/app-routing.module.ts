import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { JobComponent} from './job/job.component';
import { LocationComponent} from './location/location.component';
import { AccountComponent} from './account/account.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'job', component: JobComponent},
  {path: 'location', component: LocationComponent},
  {path: 'companies', component: LocationComponent},
  {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
