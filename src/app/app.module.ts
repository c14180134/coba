import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { Routes, RouterModule } from '@angular/router';
import { Home3Component } from './home3/home3.component';
import { GlobalService } from './global.service';

const ROUTES : Routes =[
  
 {path:'home/:id', component: HomeComponent},
 {path:'home', component: HomeComponent},
 {path:'home2', component: Home2Component},
 {path:'home3',component:Home3Component} 
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(ROUTES)
     ],

  declarations: [ AppComponent, HelloComponent, HomeComponent, Home2Component, Home3Component ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalService]
})



export class AppModule { }
