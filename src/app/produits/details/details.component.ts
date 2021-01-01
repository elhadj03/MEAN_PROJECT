import { Produits } from './../../model/produits';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() produits : Produits[];

  constructor() { }

  ngOnInit(): void {
  }

}
