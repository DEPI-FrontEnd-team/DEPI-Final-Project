import { Component, HostListener } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { gsap, TweenMax,Power4,Power1, TweenLite,} from 'gsap';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  screenWidth = window.innerWidth;

  constructor(){}
  ngOnInit() {
    let navbar = document.querySelector('#navbar')
    if (this.screenWidth <= 755) {
      navbar?.classList.add('mobile');
    } else {
      navbar?.classList.remove('mobile');
      navbar?.classList.remove('active');
    }
    
  }
  @HostListener ('window:resize') changeNavBar() {
    this.screenWidth = window.innerWidth;
    let scroll = window.scrollY
    let navbar = document.querySelector('#navbar')
    if (this.screenWidth <= 755) {
      navbar?.classList.add('mobile');
    } else {
      navbar?.classList.remove('mobile');
      navbar?.classList.remove('active');
    }
  }

  showNavBar () {
      let navbar = document.querySelector('#navbar')

      navbar?.classList.toggle('active');

      // morphing the burger butto to be a close button
      


  }


}
