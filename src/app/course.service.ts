import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICourse} from './course';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators'
import { throwError as observableThrowError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  //Funcionamiento igual solo que sin servidor
  url: string = "assets/data/courses.json"

  constructor(private http: HttpClient) { }

  getCourses(): Observable<ICourse[]> { //Seria un observable que emitira los datos a los observers.

    //Angular devuelve un observable de un get, programación reactiva.
    return this.http
               .get<ICourse[]>(this.url)
               .pipe (
                 catchError(this.errorHandler) //Catcheando el error
               )



    /*return [
      {'id':1, 'name': 'MEAN', 'time': '10'},
      {'id':2, 'name': 'Angular', 'time': '19'},
      {'id':3, 'name': 'Java', 'time': '1'},
    ]
    */
  }

  errorHandler (error: HttpErrorResponse) {
    //Este observable devuelve el mensaje del error
    return observableThrowError(error.message)
  }
}
