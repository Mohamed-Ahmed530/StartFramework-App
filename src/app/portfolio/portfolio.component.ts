import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  isHidden: boolean = true;

  isImgs: string[] = [
    './Images/port1.png',
    './Images/port2.png',
    './Images/port3.png',
    './Images/port3.png',
    './Images/port2.png',
    './Images/port1.png',
  ];

  modelImg: string = '';

  hideModel(eleTarget: EventTarget | null, imgRef: HTMLImageElement): void {
    if (eleTarget == imgRef) {
      return;
    } else {
      this.isHidden = true;
    }
  }

  

}
