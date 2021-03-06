import { Injectable, Output, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private _ingredients: Array<Ingredient> = [];

  @Output() changed = new EventEmitter<void>();

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
    this.changed.emit();
  }

  public addIngredents(ingredients: Ingredient[]) {
    for (let index = 0; index < ingredients.length; index++) {
      this._ingredients.push(ingredients[index]);
    }
    this.changed.emit();
  }

}
