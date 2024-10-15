import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testmonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testmonials.component.html',
  styleUrls: ['./testmonials.component.css'],
})
export class TestmonialsComponent implements OnInit, OnDestroy {
  screenWidth = window.innerWidth;
  testimonials = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem commodi repellat officia, aut tempore itaque amet non provident animi vel, culpa iusto. Enim commodi deserunt nobis culpa dolores vel',
      author: 'Author 1',
      img: '../shared/assets/logo trans.png',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem commodi repellat officia, aut tempore itaque amet non provident animi vel, culpa iusto. Enim commodi deserunt nobis culpa dolores vel 2',
      author: 'Author 2',
      img: '../shared/assets/logo trans.png',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem commodi repellat officia, aut tempore itaque amet non provident animi vel, culpa iusto. Enim commodi deserunt nobis culpa dolores vel 3',
      author: 'Author 3',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem commodi repellat officia, aut tempore itaque amet non provident animi vel, culpa iusto. Enim commodi deserunt nobis culpa dolores vel 3',
      author: 'Author 3',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem commodi repellat officia, aut tempore itaque amet non provident animi vel, culpa iusto. Enim commodi deserunt nobis culpa dolores vel 3',
      author: 'Author 3',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem commodi repellat officia, aut tempore itaque amet non provident animi vel, culpa iusto. Enim commodi deserunt nobis culpa dolores vel 3',
      author: 'Author 3',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem commodi repellat officia, aut tempore itaque amet non provident animi vel, culpa iusto. Enim commodi deserunt nobis culpa dolores vel 3',
      author: 'Author 3',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem commodi repellat officia, aut tempore itaque amet non provident animi vel, culpa iusto. Enim commodi deserunt nobis culpa dolores vel 3',
      author: 'Author 3',
    },
  ];

  currentCourseIndex = 0; // Start with the first testimonial
  interval: any;

  ngOnInit(): void {
    // Start the timer to move to the next slide every 3 seconds
    // this.interval = setInterval(() => {
    //   this.next();
    // }, 3000); // Change slide every 3 seconds
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed to prevent memory leaks
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  // // Automatically move to the next slide
  // next(): void {
  //   this.currentCourseIndex =
  //     (this.currentCourseIndex + 1) % this.testimonials.length;
  // }

  // // This will calculate how far to translate the carousel based on the current index
  // getTransform(): string {
  //   return `translateX(-${this.currentCourseIndex * 100}%)`;
  // }
}
