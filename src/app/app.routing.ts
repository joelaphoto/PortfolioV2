import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { DesignComponent } from './design/design.component'
import { PhotographyComponent } from './photography/photography.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'Design',
    component: DesignComponent
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
    component: AdminComponent
  },
  {
    path: 'Admin/Projects/:id',
    component:EditProjectComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
