import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapviewComponent } from './mapview/mapview.component';
import { PoliciesComponent } from './policies/policies.component';
import { ReportsComponent } from './reports/reports.component';
import { EventsComponent } from './events/events.component';


const appRoutes: Routes = [
  { path: '', component: MainComponent,pathMatch:'full' },
  { path: 'mainPage', component: MainPageComponent, 
     children:[ { path: '', redirectTo: 'dashboard'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'mapview', component: MapviewComponent },
     { path: 'policies', component: PoliciesComponent },
     { path: 'reports', component: ReportsComponent },
     { path: 'events', component: EventsComponent }
    ]},
    
 
];
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainComponent,
    DashboardComponent,
    MapviewComponent,
    PoliciesComponent,
    ReportsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),  
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDasqnG1y3QtM5ZGZFKs7uutR_5iyJdGaA'
    })
  ],
  providers: [MainComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
