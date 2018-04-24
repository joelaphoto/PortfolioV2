import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { DesignComponent } from './design/design.component'
import { PhotographerComponent } from './photographer/photographer.component';

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
    component: PhotographerComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
