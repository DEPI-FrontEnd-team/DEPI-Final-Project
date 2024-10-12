import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS, { AosOptions } from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-channel-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './channel-overview.component.html',
  styleUrl: './channel-overview.component.css',
})
export class ChannelOverviewComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    const aosOptions: AosOptions = {
      // duration: 1200, // Animation duration in milliseconds
      // easing: 'ease-in-out', // Easing function
      // once: false, // Whether animation should happen only once
      // mirror: true, // Whether elements should animate out while scrolling past them
      // offset: 120, // Offset (in px) from the original trigger point
      // delay: 0, // Delay before animation starts
      // // Add more options as needed
    };
    AOS.init(aosOptions);
  }

  ngOnDestroy(): void {
    // Optional: Refresh AOS when component is destroyed
    AOS.refresh();
  }
}
