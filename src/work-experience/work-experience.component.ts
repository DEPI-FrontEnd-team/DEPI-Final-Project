import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css',
})
export class WorkExperienceComponent {
  isBouncing = false;

  toggleBounce() {
    this.isBouncing = true;
    setTimeout(() => {
      this.isBouncing = false;
    }, 1000); // Duration matches the animation time
  }
}
