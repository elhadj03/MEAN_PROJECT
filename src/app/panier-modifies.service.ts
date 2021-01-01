import { Injectable } from '@angular/core';

import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './panier-actions.service';
 
export const initialState = 0;
 
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}




@Injectable({
  providedIn: 'root'
})
export class PanierModifiesService {

  constructor() { }
}

