import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-speakings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speakings.component.html',
  styleUrl: './speakings.component.css',
})
export class SpeakingsComponent {
  selectedCard: string = 'card-2';

  selectCard(card: string): void {
    this.selectedCard = card;
  }
}
