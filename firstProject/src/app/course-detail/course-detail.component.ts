import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesService } from './../courses/courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  id: number;
  subscription: Subscription;
  course: any;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {
    //console.log(this.route);
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params : any) => {
        this.id = params['id'];

        this.course = this.coursesService.getCourse(this.id);
        console.log(this.course);
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
