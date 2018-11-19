import { Component, OnInit, EventEmitter, Output } from '@angular/core';

enum Pages {
  Recipes,
  ShoppintList,
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activePage = 0;

  @Output() activePageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.activePageChanged.emit(this.activePage);
  }

  onShowRecipes() {
    this.activePage = 0;
    this.activePageChanged.emit(this.activePage);
  }

  onShowShoppingList() {
    this.activePage = 1;
    this.activePageChanged.emit(this.activePage);
  }

}
