import { Component, OnInit } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { produitsService} from '../produits.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-produits-par-categorie',
  templateUrl: './produits-par-categorie.component.html',
  styleUrls: ['./produits-par-categorie.component.css']
})
export class ProduitsParCategorieComponent implements OnInit {

  constructor(private produitsService : produitsService, private router : ActivatedRoute ) { }
  produits : Object[] ;

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      let categorie = params.get('categorie');

      console.log("Dans ngOninit() du composant produits");
    this.produitsService.getproduitsParCategorie(categorie).subscribe(produits =>{
      this.produits = produits;
    });
  });

  }
}

