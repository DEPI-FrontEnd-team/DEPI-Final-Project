import { AfterContentInit, Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent} from '../home/home.component';
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
import { NavbarComponent } from "../navbar/navbar.component";
import { gsap, TweenMax,Power4,Power1, TweenLite,Power3,} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isPlatformBrowser } from '@angular/common';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent,
    WorkExperienceComponent, CoursesComponent, ImpactMenaComponent,
    ChannelOverviewComponent, SkilsComponent, SpeakingsComponent,
    BlogsComponent, TestmonialsComponent, ContactComponent, CallToActionComponent, NavbarComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterContentInit {

  // home star animation // load up animations
  ngAfterContentInit(): void {

    // if (isPlatformBrowser(this.platformId)) {}

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo (
      ".homestar",
      {y: -200},
      {y: 0, duration: 1.25, ease: "power3.out"}
    )
    gsap.fromTo (
      "#mainNav",
      {y: -100},
      {y: 0, duration: 1, ease: "power1.in"}
    )
    
  }
  constructor(){}
  ngOnInit() {

    setTimeout(() => {
      let navLogo:any = document.querySelector('.logo');
      this.rect = navLogo.getBoundingClientRect();
      console.log(this.rect)
    }, 100);
  

  }

  // nav collapse animation
  rect:any;
  happend = false;
  @HostListener ('window:scroll') navCollapse() {
    let screenWidth = window.innerWidth;
    // navsections
    let mainNav = document.querySelector('#mainNav');
    let navbar = document.querySelector('#navbar')
    let navbarWhole = document.querySelector('.navigationWrapper');
    // items
    let navFavBtn:any = document.querySelector('.favBtn');
    let navLogo:any = document.querySelector('.logo');


    let newRect:any;
    
    gsap.registerPlugin(TweenMax)
    

    if (window.scrollY >= 200 && screenWidth >= 755 ) {
      // newRect = navLogo.getBoundingClientRect();
      mainNav?.classList.add('scrolled');
      navbar?.classList.add('scrolled');
      navbarWhole?.prepend(navLogo)
      navbarWhole?.append(navFavBtn)


    } else if (screenWidth > 755 ) {
      navbar?.classList.remove('scrolled');
      navbar?.append(navFavBtn)
      navbar?.prepend(navLogo)

    }

  }

  @HostListener ('window:resize') scrolledNav() {
    let screenWidth = window.innerWidth;
    // navsections
    let mainNav = document.querySelector('#mainNav');
    let navbar = document.querySelector('#navbar')
    let navbarWhole = document.querySelector('.navigationWrapper');
    // items
    let navFavBtn:any = document.querySelector('.favBtn');
    let navLogo:any = document.querySelector('.logo');





    if (window.scrollY >= 200 && screenWidth >= 755) {
      mainNav?.classList.add('scrolled');
      navbar?.classList.add('scrolled');
      navbarWhole?.append(navFavBtn)
      navbarWhole?.prepend(navLogo)

      } else if (screenWidth <= 755) {
        mainNav?.classList.remove('scrolled');
        navbar?.classList.remove('scrolled');
      }
  }


  
  title = 'Portfolio';
}

