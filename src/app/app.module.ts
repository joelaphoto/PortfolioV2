import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { DesignComponent } from './design/design.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PhotographerComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
