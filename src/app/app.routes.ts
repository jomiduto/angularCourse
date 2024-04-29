import { Routes } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { LabsComponent } from "./pages/labs/labs.component";

export const routes: Routes = [
  {
    // Defino que el HomeComponent, será el inicio del proyecto
    path: '',
    component: HomeComponent
  },
  {
    path: 'labs',
    component: LabsComponent
  }
];
