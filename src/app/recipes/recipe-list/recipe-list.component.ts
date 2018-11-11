import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [];

  constructor() {
    this.recipes.push(new Recipe('A Test recipe', 'Some Description',
      'https://cdn.pixabay.com/photo/2018/10/24/00/43/herb-3769381_960_720.jpg'));
      this.recipes.push(new Recipe('A Test recipe', 'Some Description',
      'https://cdn.pixabay.com/photo/2018/10/24/00/43/herb-3769381_960_720.jpg'));
      this.recipes.push(new Recipe('A Test recipe', 'Some Description',
      'https://cdn.pixabay.com/photo/2018/10/24/00/43/herb-3769381_960_720.jpg'));
      this.recipes.push(new Recipe('A Test recipe', 'Some Description',
      'https://cdn.pixabay.com/photo/2018/10/24/00/43/herb-3769381_960_720.jpg'));
  }

  ngOnInit() {
  }

}
