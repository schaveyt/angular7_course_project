import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(protected recipeSvc: RecipeService) {

  }

  ngOnInit() {
    this.recipeSvc.recipeSelected.emit(this.recipeSvc.recipes[0]);
  }

}
