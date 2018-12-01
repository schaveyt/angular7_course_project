import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: Array<Ingredient> = [];
  constructor() {
    this.ingredients.push(new Ingredient('Apples', 5));
    this.ingredients.push(new Ingredient('Tomates', 10));
  }
}
