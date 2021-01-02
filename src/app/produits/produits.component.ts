import { Produits } from './../model/produits';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
   selectProduit: Produits;

  constructor(private produitsService: produitsService,
    private router: Router,
    private store: Store<{ count: number} >) {
    console.log("Dans le constructeur du composant produits");
   }
  //  jincrement() {
  //   // TODO Dispatch an increment action
  //   this.store.dispatch(increment())
  // }



  //Recuperation des données
  ngOnInit() {
    console.log("Dans ngOninit() du composant produits");
    this.produitsService.getProduits().subscribe(produits =>{
      this.produits = produits;
    });


  }
  getProductItemById(pid){
    this.produitsService.getProduitsParID(pid).subscribe(produits=>{
      this.produits = produits;
    });
    this.router.navigate(['/produits/',pid]);
  }
  decrement() {
    // TODO Dispatch a decrement action
    this.store.dispatch(decrement())
  }

   increment() {
    window.alert('Voulez vous ajouter le produit dans votre panier!');
  }
  Ajouter(){
    this.store.dispatch(increment());
  }

}
