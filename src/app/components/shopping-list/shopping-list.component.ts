import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(protected shoppingListSvc: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddIngredient(i: Ingredient) {
    this.shoppingListSvc.addIngredient(i);
  }

}
