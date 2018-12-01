import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private _ingredients: Array<Ingredient> = [];
  constructor() {
    this._ingredients.push(new Ingredient('Apples', 5));
    this._ingredients.push(new Ingredient('Tomates', 10));
  }


  public get ingredients(): Array<Ingredient> {
    // return a copy of the array to avoid passing pointer of
    // the array..which could allow the client to directly
    // manipulated the private array.
    //
    return this._ingredients.slice();
  }


  public addIngredient(v: Ingredient) {
    this._ingredients.push(v);
  }

}
