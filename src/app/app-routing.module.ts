import { AccountdetailsComponent } from './account/accountdetails/accountdetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceComponent } from './service/service.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'account',
    component: AccountComponent,
    children: [{ path: ':accountno', component: AccountdetailsComponent }],
  },

  { path: 'service', component: ServiceComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
  // { path: 'account/:accountno', component: AccountdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
