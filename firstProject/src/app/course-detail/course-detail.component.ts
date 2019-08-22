import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  id: string;
  subscription: Subscription

  constructor(private route: ActivatedRoute) {
    //console.log(this.route);
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params : any) => {
        this.id = params['id'];
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
