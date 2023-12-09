import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CocktailService } from 'src/app/service/cocktail.service';
import { DetailCocktail } from 'src/app/dto/detail-cocktail';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cocktail',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule  ],
  templateUrl: './detail-cocktail.component.html',
  styleUrls: ['./detail-cocktail.component.css']
})
export class DetailCocktailComponent implements OnInit{
  cocktailDetails!: DetailCocktail;
  selectedIngredient = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private cocktailService: CocktailService,private router: Router) {}
  ngOnInit(): void {
    this.getCocktails();
  }

  private getCocktails(): void {
  this.cocktailService.getDrinkDetails(this.data.id).subscribe({
    next: (data) => {

      if (data.drinks && data.drinks.length > 0) {
        console.log(data)
        const drinkInfo = data.drinks[0];

        this.cocktailDetails = new DetailCocktail(drinkInfo);
        this.selectedIngredient = this.cocktailDetails.strIngredients[0];


      } else {
        console.error('El array de drinks está vacío o no existe.');
      }
    },
    error: (error) => {
      console.error('Error al obtener el cóctel', error);
    }
  });
}

searchByIngredient(){
  console.log(this.selectedIngredient)
  console.log( this.router.navigate(['ingrediente/', this.selectedIngredient]))
  this.router.navigate(['ingrediente/', this.selectedIngredient]);
}

}
