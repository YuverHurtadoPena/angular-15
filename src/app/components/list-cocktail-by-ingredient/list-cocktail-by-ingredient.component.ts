import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Drink } from 'src/app/dto/drink';
import { CocktailService } from 'src/app/service/cocktail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-cocktail-by-ingredient',
  standalone: true,
  templateUrl: './list-cocktail-by-ingredient.component.html',
  styleUrls: ['./list-cocktail-by-ingredient.component.css'],
  imports: [MatDialogModule, CommonModule]
})
export class ListCocktailByIngredientComponent implements OnInit {
  drinkDto: Drink[] = [];
  selectedIngredient =  "";
  constructor( private dialog: MatDialog,private cocktailService: CocktailService, private route: ActivatedRoute, private rout: Router) {}

  ngOnInit(): void {
    this.dialog.closeAll();
    this.route.params.subscribe(params => {
      this.selectedIngredient = params['selectedIngredient'];
      this.getCocktailsByIngredient(this.selectedIngredient);
    });
  }

  getCocktailsByIngredient(ingredient: string): void {
    this.cocktailService.getCocktailsByIngredient(ingredient).subscribe(
      {
        next: (data) => {
          this.drinkDto = data.drinks;
          console.log(data)
        },
        error: (error) => {
          console.error('Error al obtener los cócteles', error);
        }
      }
    );
  }

  go(){
    this.rout.navigate(['cocktail']);
  }
}
