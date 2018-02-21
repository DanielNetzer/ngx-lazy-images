import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyImagesModule } from 'ngx-lazy-images';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, LazyImagesModule, MaterialModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
