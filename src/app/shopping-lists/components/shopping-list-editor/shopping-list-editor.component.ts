import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shopping-lists/ingredient.model';

@Component({
  selector: 'app-shopping-list-editor',
  templateUrl: './shopping-list-editor.component.html',
  styleUrls: ['./shopping-list-editor.component.css']
})
export class ShoppingListEditorComponent implements OnInit {
  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;
  @Output() addIngredint = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    const name = this.inputName.nativeElement.value;
    const amount = this.inputAmount.nativeElement.value;
    const ingredint = new Ingredient(name, amount);
    this.addIngredint.emit(ingredint);
  }

}
