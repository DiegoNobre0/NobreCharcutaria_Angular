import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
    // Node/Express API
    REST_API: string = 'http://localhost:5206/api';
    // Http Header
    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(private httpClient: HttpClient) {}
    // Add
    Add(data: Product): Observable<any> {
      let API_URL = `${this.REST_API}/Products`;
      return this.httpClient
        .post(API_URL, data)
        .pipe(catchError(this.handleError));
    }
    // Get all objects
    GetAll() {
      return this.httpClient.get(`${this.REST_API}/Products`);
    }
    // Get single object
    GetById(id: any): Observable<any> {
      let API_URL = `${this.REST_API}/Products/${id}`;
      return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
        map((res: any) => {
          return res || {};
        }),
        catchError(this.handleError)
      );
    }
    // Update
    update(data: any): Observable<any> {
      let API_URL = `${this.REST_API}/Products/${data.id}`;
      return this.httpClient
        .put(API_URL, data, { headers: this.httpHeaders })
        .pipe(catchError(this.handleError));
    }
    // Delete
    delete(id: any): Observable<any> {
      let API_URL = `${this.REST_API}/Products/${id}`;
      return this.httpClient
        .delete(API_URL, { headers: this.httpHeaders })
        .pipe(catchError(this.handleError));
    }
    // Error
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Handle client error
        errorMessage = error.error.message;
      } else {
        // Handle server error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(() => {
        errorMessage;
      });
    }

}
