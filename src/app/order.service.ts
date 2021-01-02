import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  pid: string;
  stock: number;

  constructor(private http: HttpClient) { }
  onAddToCard(pid: string): Observable<any>{
    let url = `http://localhost:8888/orders`;
    return this.http.post(
      url, {
      "pid": pid,
      "stock" : 1
    })
  }
}
