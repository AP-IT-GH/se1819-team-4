import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { StoriesGurselComponent } from './stories-gursel/stories-gursel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DatumTijdComponent } from './datum-tijd/datum-tijd.component';



@NgModule({
  declarations: [
    AppComponent,
    StoriesGurselComponent,
    NavigationComponent,
    DatumTijdComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //{path:"Gursel", component: StoriesGurselComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
