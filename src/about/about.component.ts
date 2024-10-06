import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(){}
  screenWidth = window.innerWidth;
  screenMatch = window.matchMedia("(max-width: 970px)");

  elZeroImg = "../shared/assets/about/Group 29.png";

  ngOnInit() { 

    let mainContent = document.querySelector('#aboutMe .mainContent');
    let textContainer:any = document.querySelector('#aboutMe .txtContainer');
    let imgsWrapper:any = document.querySelector('#aboutMe .imgsWrapper');


    if (this.screenWidth <= 970 || this.screenMatch.matches) {
      
      mainContent?.insertBefore(imgsWrapper,textContainer);

    } else {

      mainContent?.insertBefore(textContainer,imgsWrapper);

    };

    if (window.innerWidth <= 500) {
      
      this.elZeroImg = "../shared/assets/about/Group 29-mobile.svg";

    } else {

      this.elZeroImg = "../shared/assets/about/Group 29.svg";

    }

  }
  

  getImgOnTop() {
    
    let mainContent = document.querySelector('#aboutMe .mainContent');
    let textContainer:any = document.querySelector('#aboutMe .txtContainer');
    let imgsWrapper:any = document.querySelector('#aboutMe .imgsWrapper');

    if (window.innerWidth <= 500 || this.screenMatch.matches) {

      mainContent?.insertBefore(imgsWrapper,textContainer);

    } else {

      mainContent?.insertBefore(textContainer,imgsWrapper);

    };

  }

  changeElzeroImg () {

    if (window.innerWidth <= 500) {
      
      this.elZeroImg = "../shared/assets/about/Group 29-mobile.svg";

    } else if (window.innerWidth > 500) {

      this.elZeroImg = "../shared/assets/about/Group 29.svg";

    };

  };



}
