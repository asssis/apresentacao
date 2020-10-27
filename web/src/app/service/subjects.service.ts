import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, delay, take } from 'rxjs/operators';
import { Subject } from '../models/subjects';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  constructor(private http: HttpClient) {}

  setSubjects(subject: Subject)
  {
    return this.http.post<Subject>('http://54.233.105.4:3001/subjects', {subject: subject});
  }
  getSubjects(subject: Subject)
  {
    return this.http.post<Subject>('http://54.233.105.4:3001/subjects/save', subject);
  }
  listSubjects()
  {
    return this.http.get<Subject[]>('http://54.233.105.4:3001/subjects');
  }
}


