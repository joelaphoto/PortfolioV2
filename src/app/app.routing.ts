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
import { VirtualBtsComponent } from './virtual-bts/virtual-bts.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'development',
    component: DevelopmentComponent
  },
  {
    path: 'photography/:category',
    component: PhotographyComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/projects/:id',
    component: EditProjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'photography/:category/:id',
    component: PhotoDetailComponent
  },
  {
    path: 'VirtualBts',
    component: VirtualBtsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
