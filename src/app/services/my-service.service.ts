// my-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/book';

interface ApiResponse {
  data: Book[];
}

@Injectable({ providedIn: 'root' })
export class MyServiceService {
  private apiURL = 'https://stephen-king-api.onrender.com/api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http
      .get<ApiResponse>(this.apiURL)
      .pipe(map((response) => response.data));
  }
}
