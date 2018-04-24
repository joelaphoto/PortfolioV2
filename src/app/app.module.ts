import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PhotographyComponent } from './photography/photography.component';
import { DesignComponent } from './design/design.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PhotographyComponent,
    DesignComponent,
    AboutComponent,
    NavbarComponent
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
