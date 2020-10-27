import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  keyframes,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter', [
        animate(300, style({
          transform: 'translateX(0)',
          opacity:1
        }))
      ])
    ])
  ]  
})
export class ListComponent implements OnInit {


  items: Array<string>;
  animateItems = false;

  constructor() { 
    this.items = ["teste1","teste2","teste3"];
  }

  ngOnInit(): void {
  }
  selectMenu(item: string) {
    this.animate();

  }

  private animate() {
    this.animateItems = !this.animateItems;
  }

}
