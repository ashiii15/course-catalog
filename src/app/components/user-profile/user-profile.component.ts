import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  enrolledCourses: any[] = []; // Replace with appropriate type

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    // Replace with actual API for retrieving user-enrolled courses
    this.enrolledCourses = [
      { title: 'Angular Basics', progress: 50 },
      { title: 'Advanced TypeScript', progress: 80 }
    ];
  }
}
