import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploComponent } from './components/exemplo/exemplo.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { CarroselService } from './services/carrosel';
import { ExemploService } from './services/exemplo.service';
import { Browser } from 'protractor';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploComponent,
    CarrosselComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    CarroselService,
    ExemploService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
