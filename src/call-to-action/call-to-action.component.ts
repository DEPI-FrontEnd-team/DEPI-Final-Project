import { Component } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.css',
})
export class CallToActionComponent {
  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
