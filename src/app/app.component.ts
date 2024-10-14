import {
  AfterContentInit,
  Component,
  HostListener,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { CoursesComponent } from '../courses/courses.component';
import { ImpactMenaComponent } from '../impact-mena/impact-mena.component';
import { ChannelOverviewComponent } from '../channel-overview/channel-overview.component';
import { SkilsComponent } from '../skils/skils.component';
import { SpeakingsComponent } from '../speakings/speakings.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { TestmonialsComponent } from '../testmonials/testmonials.component';
import { ContactComponent } from '../contact/contact.component';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { gsap, TweenMax, Power4, Power1, TweenLite, Power3, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isPlatformBrowser } from '@angular/common';
import { trigger } from '@angular/animations';
import { scan } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HomeComponent,
    AboutComponent,
    WorkExperienceComponent,
    CoursesComponent,
    ImpactMenaComponent,
    ChannelOverviewComponent,
    SkilsComponent,
    SpeakingsComponent,
    BlogsComponent,
    TestmonialsComponent,
    ContactComponent,
    CallToActionComponent,
    NavbarComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterContentInit {
  //navigations
  public scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // home star animation // load up animations
  ngAfterContentInit(): void {
    // if (isPlatformBrowser(this.platformId)) {}
    let osamaImg: any = document.querySelector('.osamaImg');
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TweenMax);
    TweenMax.fromTo(
      '.homestar',
      1.5,
      {
        y: 2000,
        scale: 50,
        rotation: 280,
        ease: Expo.easeInOut,
        delay: 2.5,
      },
      {
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'power3.out',
      }
    );

    TweenMax.fromTo(
      '.helloim',
      1,
      {
        y: 100,
        opacity: 0,
        ease: Expo.easeInOut,
      },
      {
        y: 0,
        opacity: 1,
        ease: Expo.easeInOut,
        delay: 1,
      }
    );
    TweenMax.fromTo(
      '.osamamoh',
      1,
      {
        y: 100,
        opacity: 0,
        ease: Expo.easeInOut,
      },
      {
        y: 0,
        opacity: 1,
        ease: Expo.easeInOut,
        delay: 1.5,
      }
    );
    TweenMax.fromTo(
      '.osamaImg',
      1,
      {
        y: 100,
        opacity: 0,
        ease: Expo.easeInOut,
      },
      {
        y: 0,
        opacity: 1,
        ease: Expo.easeInOut,
        delay: 1.5,
      }
    );

    TweenMax.fromTo(
      '#mainNav',
      1,
      {
        y: -200,
        opacity: 0,
        ease: Expo.easeInOut,
      },
      {
        y: 0,
        opacity: 1,
        ease: Expo.easeInOut,
        delay: 2,
      }
    );

    setTimeout(() => {
      osamaImg.style.transform = 'translate(0,0)';
    }, 500);
  }
  // constructor(){}
  // ngOnInit() {

  //   let navbar = document.querySelector('#navbar');
  //   if(navbar?.classList.contains('active')) {
  //     console.log(document)
  //   } else {
  //     console.log(navbar);
  //   }

  // }

  // nav collapse animation
  rect: any;
  happend = false;
  @HostListener('window:scroll') navCollapse() {
    let screenWidth = window.innerWidth;
    // navsections
    let mainNav = document.querySelector('#mainNav');
    let navbar = document.querySelector('.navWrapper');

    gsap.registerPlugin(TweenMax);

    if (window.scrollY >= 200 && screenWidth >= 755) {
      // newRect = navLogo.getBoundingClientRect();
      mainNav?.classList.add('scrolled');
      navbar?.classList.add('scrolled');
    } else if (screenWidth > 755) {
      navbar?.classList.remove('scrolled');
    }
  }

  @HostListener('window:resize') scrolledNav() {
    let screenWidth = window.innerWidth;
    // navsections
    let mainNav = document.querySelector('#mainNav');
    let navbar = document.querySelector('.navWrapper');

    if (window.scrollY >= 200 && screenWidth >= 755) {
      mainNav?.classList.add('scrolled');
      navbar?.classList.add('scrolled');
    } else if (screenWidth <= 755) {
      mainNav?.classList.remove('scrolled');
      navbar?.classList.remove('scrolled');
    }
  }

  title = 'Portfolio';
}
