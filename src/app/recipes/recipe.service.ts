import { Injectable, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shopping-lists/ingredient.model';
import { ShoppingListService } from '../shopping-lists/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private _recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListSvc: ShoppingListService) {

    this._recipes.push(
      new Recipe(
        'Hunan Chicken',
        'Hunan Chicken is super delicious',
        'http://c1.staticflickr.com/5/4051/4321915382_54aae2f472.jpg',
        [
          new Ingredient('Chicken', 1),
          new Ingredient('Scallops', 1),
          new Ingredient('Soy Sauce', 1),
          new Ingredient('Bamboo Shoots', 1),
        ]
      )
    );

    this._recipes.push(
      new Recipe(
        'Savory Potatoes',
        'Yummy yum yum.',
        'http://c1.staticflickr.com/8/7386/8824217104_3969346566_n.jpg',
        [
          new Ingredient('Potatoes', 10),
          new Ingredient('Olive Oil', 1),
          new Ingredient('Chives', 2),
          new Ingredient('Garlic', 3),
        ]
      )
    );

    this._recipes.push(
      new Recipe(
        'Moraccan Chilli',
        'You\'re gonna love this!',
        'https://upload.wikimedia.org/wikipedia/commons/3/3b/%D0%9B%D0%BE%D0%B1%D0%B8%D0%BE_%D0%B2_%D0%B3%D0%BE%D1%80%D1%88%D0%BE%D1%87%D0%BA%D0%B5.jpg',
        [
          new Ingredient('Lentils', 32),
          new Ingredient('Cranberries', 7),
          new Ingredient('Red Onion', .5),
          new Ingredient('Parsley', 2),
        ]
      )
    );

    this._recipes.push(
      new Recipe(
        'Russian Rice n Beans',
        'Comfort food for sure!',
        'https://img.iamcook.ru/old/upl/recipes/zen/u-bd5d03da2e08cf4b73ebb523cba15e22.JPG',
        [
          new Ingredient('Rice', 30),
          new Ingredient('Black Beans', 2),
          new Ingredient('Red Bell pepper', 1),
          new Ingredient('Parsley', 1),
        ]
      )
    );
  }

  public get recipes(): Array<Recipe> {
    // return a copy of the array to avoid passing pointer of
    // the array..which could allow the client to directly
    // manipulated the private array.
    //
    return this._recipes.slice();
  }

  public addRecipe(v: Recipe) {
    this._recipes.push(v);
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListSvc.addIngredents(ingredients);
  }
}
