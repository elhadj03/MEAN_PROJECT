import { Produits } from './../model/produits';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { produitsService, increment, decrement } from '../produits.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  count$: Observable<number>
   produits: Produits [] = [];

  constructor(private produitsService: produitsService,
    private store: Store<{ count: number} >) {
    console.log("Dans le constructeur du composant produits");
   }
   increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment())
  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement())
  }

  //Recuperation des données
  ngOnInit() {
    console.log("Dans ngOninit() du composant produits");
    this.produitsService.getProduits().subscribe(produits =>{
      this.produits = produits;
    });
  }

}
