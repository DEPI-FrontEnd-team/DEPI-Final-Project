import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Necessary for pipes like 'number'
import { NgFor } from '@angular/common';
interface Logo {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent {
  constructor() { }

  ngOnInit(): void {
  }
}
