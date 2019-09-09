import { NgModule } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';

const appRoutes: Routes = [
    {path: 'courses', component: CoursesComponent},
    {path: 'course/:id', component: CourseDetailComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
