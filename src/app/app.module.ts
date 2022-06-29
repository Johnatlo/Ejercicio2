import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyComponent } from './components/lazy/lazy.component';
import { SeguroComponent } from './components/seguro/seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyComponent,
    SeguroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
