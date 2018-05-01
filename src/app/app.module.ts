import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { config } from './api-keys'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PhotographyComponent } from './photography/photography.component';
import { DevelopmentComponent } from './development/development.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { LoginComponent } from './login/login.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './services/authguard.service'
import { ImageService } from './services/image.service';
import { UploadService } from './services/upload.service';
import { ProjectService } from './services/project.service';
import { AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  storageBucket: config.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PhotographyComponent,
    DevelopmentComponent,
    AboutComponent,
    NavbarComponent,
    AdminComponent,
    AddProjectComponent,
    EditProjectComponent,
    LoginComponent,
    PhotoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuth
  ],
  providers: [AuthGuard, AuthenticationService, ImageService, UploadService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
