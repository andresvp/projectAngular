import { Routes, RouterModule } from  '@angular/router';

import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: 'courses', component: CoursesComponent},
    {path: 'course/:id', component: CourseDetailComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
