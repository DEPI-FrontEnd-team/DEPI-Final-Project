import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  eleTarget: any = '';
  elementPosX: any;
  elZeroTargetPos: any;

  constructor(){}
  ngOnInit() {

    let ElementRef = document.querySelector('.osamaImg')
    let elementTarget = document.querySelector('.txtContainer');
    let targetX:any = ElementRef?.getBoundingClientRect().width;
    let screenSize = window.innerWidth;

    this.elementPosX = -(targetX * 0.23);

    let elZero = document.querySelector(".elzero");

    this.elZeroTargetPos = targetX * 0.43;
    
  }
  
  getPostion () {
    let ElementRef = document.querySelector('.osamaImg')
    let elementTarget = document.querySelector('.txtContainer');
    let targetX:any = ElementRef?.getBoundingClientRect().width;
    let screenSize = window.innerWidth;

    if (screenSize >= 1840) {
      this.elementPosX = -(targetX * 0.23);
    } else {
      this.elementPosX = -(targetX * 0.2);
    }

    let elZero = document.querySelector(".elzero");

    this.elZeroTargetPos = targetX * 0.43;
    

  }



}
