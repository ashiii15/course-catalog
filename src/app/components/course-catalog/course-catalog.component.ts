import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-catalog',
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.scss']
})
export class CourseCatalogComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm: string = '';
  filter: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
      this.filteredCourses = data;
    });
  }

  onSearch(): void {
    this.filteredCourses = this.courses.filter((course) =>
      course.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onFilterChange(): void {
    if (this.filter === 'price') {
      this.filteredCourses.sort((a, b) => a.price - b.price);
    } else if (this.filter === 'rating') {
      this.filteredCourses.sort((a, b) => b.rating - a.rating);
    } else if (this.filter === 'category') {
      this.filteredCourses.sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    }
  }

  enroll(courseId: number): void {
    this.courseService.enroll(courseId).subscribe(() => {
      alert('Enrolled successfully!');
    });
  }

  unenroll(courseId: number): void {
    this.courseService.unenroll(courseId).subscribe(() => {
      alert('Unenrolled successfully!');
    });
  }
}
