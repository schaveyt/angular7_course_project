import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeSvc: RecipeService) { }

  ngOnInit() {
  }

  onClick_ToShoppingList() {
    this.recipeSvc.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
