import { DetailsComponent } from './../produits/details/details.component';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { produitsService } from '../produits.service';
import { Observable } from 'rxjs';
import {Router}   from '@angular/router';

@Component({
      selector: 'app-categories',
      templateUrl: './categories.component.html',
      styleUrls: ['./categories.component.css']
      })

export class CategoriesComponent implements OnInit {
         user: Observable<string>;
        public categories: String[] = new Array();


        constructor(private authService: AuthentificationService,
          private router : Router,
        private produitsService: produitsService)
        { this.user = this.authService.getUser();}

  ngOnInit() {

  this.produitsService.getCategories().subscribe(categories => {
  this.categories = categories;
  });
}
  produitsParCategorie(categorie) {
    this.router.navigate([ '/produits', categorie] );
 }

 produitsParId(id) {
  this.router.navigate([DetailsComponent] );
}
}
