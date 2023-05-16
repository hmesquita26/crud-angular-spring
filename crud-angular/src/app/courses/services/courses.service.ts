import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'front-end'},
      { _id: '1', name: 'Java', category: 'back-end'},
      { _id: '1', name: 'Spring Boot', category: 'back-end'}
    ];
  }
}
