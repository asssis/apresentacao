import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subjects';
import { SubjectsService } from 'src/app/service/subjects.service';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; 
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  templateUrl: './new.component.html'
})
export class NewComponent implements OnInit {
  subject: Subject = <Subject>{image: "", title: "", text: ""};
  image: SafeHtml = "";
  error: any = {image: "", title: "", text: ""};

  
  constructor(private router: Router,
              private service: SubjectsService, 
              private sanitizer: DomSanitizer, 
              private app: AppComponent) { }

  ngOnInit(): void {    
  }
 
  onSave(){
    this.app.loading_open();
    this.service.setSubjects(this.subject).subscribe(data => {
      this.app.loading_closed();
      this.router.navigate(['subject']);
      this.app.msn("success","Success!","Subject saved successfully!");
    }, (error: any) => {
        this.app.loading_closed();
        if(error.status != 0){
          this.error = error.error;
        }
        else{
          this.app.msn("erro","Fail!","Image not allowed!");
        }
    });
  }
  
  onChange(e) {    
    this.app.loading_open();
    const selectedfiles = e.srcElement.files;
    document.getElementById('file-name').innerText = selectedfiles[0].name;
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
        this.app.loading_closed();
        this.app.msn("erro","Fail!","Image not allowed!");
        return;
    }
    reader.onload = this.readerLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  readerLoaded(e) { 
   this.subject.image =  e.target.result;
   this.image = this.sanitizer.bypassSecurityTrustResourceUrl(e.target.result);
   this.app.loading_closed();
  }    

}
