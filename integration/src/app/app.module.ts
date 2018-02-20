import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyImages } from 'lazy-images';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, LazyImages],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
