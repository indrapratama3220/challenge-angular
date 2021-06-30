import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private readonly http: HttpClient ) {}

  getHistoryTransaction():Observable<any> {
    return this.http.get(`http://localhost:8080/purchase`).pipe(map((response) => response)
    )}
}
