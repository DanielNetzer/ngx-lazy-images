import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyImagesModule } from 'lazy-images';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, LazyImagesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
