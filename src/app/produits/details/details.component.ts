import { produitsService } from './../../produits.service';
import { Produits } from './../../model/produits';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  item:object;

  @Input() produits: Produits[];

  constructor( private produitsService: produitsService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.produits;
  };
  getProduits(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.produitsService.getProduitsParID(id)
      .subscribe(produits => this.produits = produits);
  }

  goBack(): void {
    this.location.back();
  }
}

// produitsParId(_id) {
//   this.router.navigate([DetailsComponent] );
// }


