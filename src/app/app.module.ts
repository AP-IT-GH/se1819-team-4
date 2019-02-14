import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VermenigvuldigenComponent } from './vermenigvuldigen/vermenigvuldigen.component';

@NgModule({
  declarations: [
    AppComponent,
    VermenigvuldigenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
