import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxClampModule } from 'ngx-clamp';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxClampModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
