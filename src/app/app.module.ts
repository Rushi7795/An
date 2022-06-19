import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { MultimessagesComponent } from './multimessages/multimessages.component';
import { MultipleServicesComponent } from './multiple-services/multiple-services.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceInstanceComponent } from './service-instance/service-instance.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    ServiceDetailComponent,
    MultimessagesComponent,
    MultipleServicesComponent,
    ServiceInstanceComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }