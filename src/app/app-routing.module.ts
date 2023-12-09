import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCocktailByIngredientComponent } from './components/list-cocktail-by-ingredient/list-cocktail-by-ingredient.component';
import { CocktailsComponent } from './components/cocktails/cocktails.component';

const routes: Routes = [
  {path: ' ',redirectTo: 'cocktail',pathMatch: 'full'},
  {path: 'cocktail',component: CocktailsComponent},
  {path: 'ingrediente/:selectedIngredient',component:ListCocktailByIngredientComponent},
  { path: '**', component: CocktailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
