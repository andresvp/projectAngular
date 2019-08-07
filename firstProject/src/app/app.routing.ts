import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from  '@angular/router';

import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: 'course', component: CoursesComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
