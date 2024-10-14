import { Component, HostListener } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { gsap, TweenMax, Power4, Power1, TweenLite, Expo } from 'gsap';
import { delay } from 'rxjs';
import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AppComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  screenWidth = window.innerWidth;
  public scrollToSection(section: string) {
    const element = document.getElementById(section);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  constructor() {}
  ngOnInit() {
    let navbar = document.querySelector('#navbar');
    if (this.screenWidth <= 755) {
      navbar?.classList.add('mobile');
    } else {
      navbar?.classList.remove('mobile');
      navbar?.classList.remove('active');
    }
    this.screenWidth = window.innerWidth;
  }
  @HostListener('window:resize') changeNavBar() {
    this.screenWidth = window.innerWidth;
    let scroll = window.scrollY;
    let navbar = document.querySelector('#navbar');
    if (this.screenWidth <= 755) {
      navbar?.classList.add('mobile');
    } else {
      navbar?.classList.remove('mobile');
      navbar?.classList.remove('active');
    }
  }

  showNavBar() {
    let navbar = document.querySelector('#navbar') as HTMLHtmlElement;
    let main = document.querySelector('main');
    let body = document.querySelector('body');
    let mobile = document.querySelector('#navbar.mobile') as HTMLHtmlElement;
    navbar?.classList.toggle('active');

    gsap.registerPlugin(TweenMax);

    // morphing the burger butto to be a close button
    if (navbar?.classList.contains('active')) {
      TweenMax.fromTo(
        '.active',
        0.2,
        {
          height: 80,
          ease: Expo.easeInOut,
        },
        {
          height: '100vh',
          ease: Expo.easeInOut,
        }
      );

      main!.style.pointerEvents = 'none';
      setTimeout(() => {
        body!.style.height = '100%';
        body!.style.overflow = 'hidden';
      }, 100);
    } else {
      TweenMax.fromTo(
        '.mobile',
        0.2,
        {
          height: window.innerHeight,
          ease: Expo.easeInOut,
        },
        {
          height: 80,
          ease: Expo.easeInOut,
        }
      );

      main!.style.pointerEvents = 'auto';
      body!.style.height = 'auto';
      body!.style.overflow = 'auto';
      navbar!.style.height = 'auto';
    }
  }
}
