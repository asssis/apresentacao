import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'src/app/service/subjects.service';
import { Subject } from '../../../models/subjects';

import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
 
  constructor(private service: SubjectsService, public sanitizer: DomSanitizer) {
  }
  
  public image_safe(image)
  { 
    return this.sanitizer.bypassSecurityTrustResourceUrl(image);
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
