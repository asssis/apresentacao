import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, query, stagger, keyframes } from '@angular/animations';
import { SubjectsService } from '../../service/subjects.service';
import { Subject } from '../../models/subjects';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './home.component.html',
  animations: [
    trigger('enterState', [
      transition('* => *', [
        query('.item-card', style({ opacity: 0 }), { optional: true }),
        query('.item-card', stagger('300ms', [
          animate('1s', keyframes([
            style({ opacity: 0, transform: 'translateX(-100%) translateY(-100%)', offset: 0 }),
            style({ opacity: 0.4, transform: 'translateX(35px) translateY(-35%)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 1.0 }),
          ]))]),
          { optional: true })

      ])
    ])
  ]

})
export class HomeComponent implements OnInit {
  constructor(private service: SubjectsService) {
  }
  subjects: Subject[];
  ngOnInit(): void {
    this.service.listSubjects().subscribe(data => {
      this.subjects = <Subject[]>data;
    }, (error: any) => {
      console.log('ERROR', error);
    });
  }

}
