import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../ingredient.model';
import { ShoppingListService } from 'src/app/shopping-lists/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(protected shoppingListSvc: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListSvc.ingredients;
    this.shoppingListSvc.changed.subscribe(() => { this.onShoppingListChange(); });
  }
  onShoppingListChange() {
    this.ingredients = this.shoppingListSvc.ingredients;
  }

  onAddIngredient(i: Ingredient) {
    this.shoppingListSvc.addIngredient(i);
  }

}

