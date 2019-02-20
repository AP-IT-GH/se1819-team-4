import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'



import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { StoriesGurselComponent } from './stories-gursel/stories-gursel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DatumTijdComponent } from './datum-tijd/datum-tijd.component';
import { ReverseNameComponent } from './reverse-name/reverse-name.component';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from "primeng/toolbar";
//import { ReverseNameComponent } from './reverse-name/reverse-name.component';
import { VermenigvuldigenComponent } from './vermenigvuldigen/vermenigvuldigen.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    StoriesGurselComponent,
    NavigationComponent,
    DatumTijdComponent,
    ReverseNameComponent,
    VermenigvuldigenComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    ToolbarModule,
    RouterModule.forRoot([
      {path: "home", component: HomeComponent },
      {path:"Gursel", component: StoriesGurselComponent},
      {path:"Reversename", component: ReverseNameComponent},
      {path:"DatumTijd", component: DatumTijdComponent},
      {path:"RandomNummer", component: VermenigvuldigenComponent},
      {path: "", redirectTo: "home", pathMatch:"full" }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
