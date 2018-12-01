import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(protected recipeSvc: RecipeService) {

  }

  ngOnInit() {
    this.recipeSelected.emit(this.recipeSvc.recipes[0]);
  }

  onRecipeItemSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
