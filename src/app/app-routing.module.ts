import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleServicesComponent } from './multiple-services/multiple-services.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes2', component: HeroesComponent },
  { path: 'ss', component: MultipleServicesComponent },
  { path: 'detail/:id', component: ServiceDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
