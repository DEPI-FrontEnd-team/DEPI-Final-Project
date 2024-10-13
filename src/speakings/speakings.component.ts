import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngSwitch and others
import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-speakings',
  standalone: true,
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './speakings.component.html',
  styleUrls: ['./speakings.component.css']
})
export class SpeakingComponent implements AfterViewInit {
  mediaItems = [
    {
      type: 'image',
      src: 'assets/angular-logo.png',
      link: 'https://example.com',
      linkText: 'Learn More'
    },
    {
      type: 'video',
      src: 'assets/video1.mp4',
      link: 'https://example.com',
      linkText: 'Watch Full Video'
    },
    {
      type: 'text',
      content: 'Podcast Interview with XYZ',
      link: 'https://example.com',
      linkText: 'Listen Here'
    }
  ];

  constructor() {}

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  }}
