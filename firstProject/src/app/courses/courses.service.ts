import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses(){
    return[
      {id:1, name: 'Angular 2'},
      {id:2, name: 'Java'}
    ];
  }

  getCourse(id: number){
    let courses = this.getCourses();
    return courses.find(course => course.id == id);
  }

  constructor() { }
}
