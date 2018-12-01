import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListEditorComponent } from './components/shopping-list-editor/shopping-list-editor.component';

import { RecipesComponent } from './recipes/components/recipes/recipes.component';
import { RecipeListComponent } from './recipes/components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/components/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/components/recipe-detail/recipe-detail.component';
import { Bs4DropdownHelperDirective } from './directives/bootstrap4/dropdown-helper.directive';
import { Bs4NavbarToggleHelperDirective } from './directives/bootstrap4/navbar-toggler-helper.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditorComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    Bs4DropdownHelperDirective,
    Bs4NavbarToggleHelperDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
