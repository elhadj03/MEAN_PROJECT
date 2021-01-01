import { Injectable } from '@angular/core';
import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
@Injectable({
  providedIn: 'root'
})
export class PanierActionsService {

  constructor() { }
}

