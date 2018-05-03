import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { DevelopmentComponent } from './development/development.component'
import { PhotographyComponent } from './photography/photography.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { LoginComponent } from './login/login.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { AuthGuard } from './services/authguard.service'
import { UploadComponent } from './upload/upload.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'Development',
    component: DevelopmentComponent
  },
  {
    path: 'Photography',
    component: PhotographyComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Admin/Projects/:id',
    component: EditProjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'LogIn',
    component: LoginComponent
  },
  {
    path: 'Photography/Photo/:id',
    component: PhotoDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
