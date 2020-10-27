import { Component } from '@angular/core';
import { animate, transition, state, style, trigger } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("fade", [ 
      state('open', style({
        opacity: 1,
        visibility: 'visible'
        
      })),
      state('closed', style({
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]), 
  ]
})
export class AppComponent {
  public message: string = "";
  public title: string = "";
  public text: string;
  public load: boolean = false;
  
  public loading_open() {
    this.load=true;
  }
  public loading_closed() {
   setTimeout(()=>{this.load=false;}, 300);
  }
  public msn(message, title, text)
  {
    setTimeout(()=>{
      this.message = message;
      this.title = title;
      this.text = text;
    }, 500);
  }
}
