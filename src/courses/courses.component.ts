import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [
    { title: 'Problems Solving With C++', description: 'This course covers fundamental concepts and techniques in software design for solving problems in electrical and computer engineering (ECE) using C++. learn procedural and object-oriented program development, as well as basic control structures, data structures, and algorithms. Students apply these skills in crafting and testing structured programs to solve problems of interest in ECE, such as linear circuits and systems, digital circuits and systems, and linear algebra and differential equations.'  } ,  
    { title: 'Create a professional WordPress design from scratch', description: 'Create a professional WordPress design to sell or use on your personal or client website.' },
    { title: 'Create 50 practical applications using JavaScript', description: 'Create 50 practical applications on the JavaScript language to employ what you have learned in your field as a Front-End Developer.' },
  ];

  currentCourseIndex = 1; 

  next() {
    this.currentCourseIndex = (this.currentCourseIndex + 1) % this.courses.length;
  }

  prev() {
    this.currentCourseIndex = (this.currentCourseIndex - 1 + this.courses.length) % this.courses.length;
  }

  isActive(index: number): boolean {
    return this.currentCourseIndex === index;
  }

  isLeft(index: number): boolean {
    return (this.currentCourseIndex - 1 + this.courses.length) % this.courses.length === index;
  }

  isRight(index: number): boolean {
    return (this.currentCourseIndex + 1) % this.courses.length === index;
  }
}