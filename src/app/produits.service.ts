import { OrderService } from './order.service';
import { Produits } from './model/produits';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http' ;
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { createReducer, on } from '@ngrx/store';
import { createAction } from '@ngrx/store';
import { ActivatedRoute, Params, Router } from '@angular/router'



export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
//export const reset = createAction('[Counter Component] Reset');




export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),

);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

@Injectable({ providedIn : 'root' })
export class produitsService {
  produits: Produits [] = [];
 private urlBase: string = 'http://localhost:8888/';



  constructor(private http: HttpClient, private orderService: OrderService, private router: Router) { }

  getProduits(): Observable<any> {
    let url = this.urlBase+'produits';
    console.log("Dans le service ProduitsService avec "+url);
    return this.http.get(url);
  }

    // pid = Product ID
  getProduitsParID(produitId): Observable<any>{
      let url = this.urlBase+'produits/'+produitId;
      console.log("Dans le service ProduitsServices avec "+url);
      return this.http.get(url);
    }


  getCategories(): Observable<any>{
    let url = this.urlBase + 'categories';
    console.log("Dans le service ProduitsServices avec "+url);
    return this.http.get(url);
  }

  getproduitsParCategorie(categorie): Observable<any>{
    let url = this.urlBase + 'produits/'+categorie;
    console.log("Dans le service ProduitsServices avec "+url);
    return this.http.get(url);
  }

  getPanier(): Observable<any> {
    let url = this.urlBase+'panier';
    console.log("Dans le service ProduitsService avec"+url);
    return this.http.get(url);
  }


}
