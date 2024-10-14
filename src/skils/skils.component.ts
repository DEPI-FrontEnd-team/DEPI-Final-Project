import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Necessary for pipes like 'number'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skils',
  standalone: true,
  imports: [],
  templateUrl: './skils.component.html',
  styleUrl: './skils.component.css'
})
export class SkilsComponent {
  constructor() { }

  ngOnInit(): void {
  }
}
