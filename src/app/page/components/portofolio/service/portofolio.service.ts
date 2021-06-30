import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, of } from "rxjs";
import { map, retry, tap } from "rxjs/operators";
import { Pocket } from '../models/pocket.model';



@Injectable({
  providedIn: 'root'
})
export class PortofolioService {
  constructor(private http: HttpClient) { }

  
  buyTransaction(purchase:any): Observable<any> {
    return this
    .http
      .post(`http://localhost:8080/purchase?customerId=40288ceb7913596e0179136d52850006`, purchase)
        .pipe(map((response) => response))

  }

  getAllPocket(): Observable<any> {
    return this.http
    .get<any>(`http://localhost:8080/customer/40288ceb7913596e0179136d52850006/pockets`)
    }

    
  getAllProduct(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/products`)
  }

  getProductById(id:string): Observable<any> {
    return this.http
    .get<any>(`http://localhost:8080/product/${id}`)
    }

  createPocket(pocket: Pocket): Observable<any> {
    return this.http
    .post(`http://localhost:8080/pocket`, pocket)
      .pipe(map((response: any) => response))
    }

  deletePocket(id: string): Observable<any> {
    console.log(id);
    console.log("testDelete");
    return this.http.delete(`http://localhost:8080/pocket/${id}`)
  }

  updatePocket(pocket: Pocket): Observable<any> {
    console.log(pocket);
    console.log("test");
    
    return this.http
    .put(`http://localhost:8080/pockets`, pocket)
      .pipe(map((response: any) => response))
    }

    getHistoryPriceByProductId(id:string):Observable<any> {
      return this
        .http
        .get(`http://localhost:8080/product/${id}/history`)
          .pipe(map((response) => response));
    }

    
}
