import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver  {

  constructor(private service: CoursesService) {}

  /**
   * Um resolver sempre é executado antes de carregar o component.
   * Esse tipo de abordagem só é indicado se o carregamento for rapido.
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }

      return of({_id: '', name: '', category: '', lessons: [] });
  }
}
