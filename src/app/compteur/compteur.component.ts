import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { increment,decrement,reset} from '../panier-actions.service'; 

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent implements OnInit {
  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) { 
    this.count$ = store.select('count');
  }

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment())
  }
 
  
 
  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset())
  }

  ngOnInit(): void {
  }

}
