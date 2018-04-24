import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { DesignComponent } from './design/design.component'
import { PhotographyComponent } from './photography/photography.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
