import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoriesGurselComponent } from './stories-gursel/stories-gursel.component';
import { DatumTijdComponent } from './datum-tijd/datum-tijd.component';

@NgModule({
  declarations: [
    AppComponent,
    StoriesGurselComponent
    AppComponent,
    DatumTijdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
