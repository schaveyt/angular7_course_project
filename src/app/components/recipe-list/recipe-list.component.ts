import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
    this.recipes.push(new Recipe('Hunan Chicken', 'Hunan Chicken is super delicious',
      'http://c1.staticflickr.com/5/4051/4321915382_54aae2f472.jpg'));
      this.recipes.push(new Recipe('Savory Potatoes', 'Yummy yum yum.',
      'http://c1.staticflickr.com/8/7386/8824217104_3969346566_n.jpg'));
      this.recipes.push(new Recipe('Moraccan Chilli', 'You\'re gonna love this!',
      'https://upload.wikimedia.org/wikipedia/commons/3/3b/%D0%9B%D0%BE%D0%B1%D0%B8%D0%BE_%D0%B2_%D0%B3%D0%BE%D1%80%D1%88%D0%BE%D1%87%D0%BA%D0%B5.jpg'));
      this.recipes.push(new Recipe('Russian Rice n Beans', 'Comfort food for sure!',
      'https://img.iamcook.ru/old/upl/recipes/zen/u-bd5d03da2e08cf4b73ebb523cba15e22.JPG'));
  }

  ngOnInit() {
  }

  onRecipeItemSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
