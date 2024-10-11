import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap, TweenMax, Power4, Power1, TweenLite, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor() {}
  screenWidth = window.innerWidth;
  screenMatch = window.matchMedia('(max-width: 970px)');

  elZeroImg = '../shared/assets/about/Group 29.png';

  ngOnInit() {
    let mainContent = document.querySelector('#aboutMe .mainContent');
    let textContainer: any = document.querySelector('#aboutMe .txtContainer');
    let imgsWrapper: any = document.querySelector('#aboutMe .imgsWrapper');

    if (this.screenWidth <= 970 || this.screenMatch.matches) {
      mainContent?.insertBefore(imgsWrapper, textContainer);
    } else {
      mainContent?.insertBefore(textContainer, imgsWrapper);
    }

    if (window.innerWidth <= 500) {
      this.elZeroImg = '../shared/assets/about/Group 29-mobile.svg';
    } else {
      this.elZeroImg = '../shared/assets/about/Group 29.svg';
    }

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TweenMax);

    TweenMax.fromTo(
      '.aboutmeStar',
      5,
      {
        y: '-20vh',
        scale: 1,
        rotate: 360,
      },
      {
        scrollTrigger: {
          trigger: '.aboutmeStar',
          start: 'top 40%',
          end: 'bottom 60%',
          scrub: 1,
        },
        y: 0,
        scale: 1,
      }
    );
  }

  getImgOnTop() {
    let mainContent = document.querySelector('#aboutMe .mainContent');
    let textContainer: any = document.querySelector('#aboutMe .txtContainer');
    let imgsWrapper: any = document.querySelector('#aboutMe .imgsWrapper');

    if (window.innerWidth <= 500 || this.screenMatch.matches) {
      mainContent?.insertBefore(imgsWrapper, textContainer);
    } else {
      mainContent?.insertBefore(textContainer, imgsWrapper);
    }
  }

  changeElzeroImg() {
    if (window.innerWidth <= 500) {
      this.elZeroImg = '../shared/assets/about/Group 29-mobile.svg';
    } else if (window.innerWidth > 500) {
      this.elZeroImg = '../shared/assets/about/Group 29.svg';
    }
  }
}
