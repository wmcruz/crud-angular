import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { delay, take, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/acourses.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      take(1),
      delay(5000),
      tap(courses => console.log(courses))
    );
  }
}
