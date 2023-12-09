import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailService } from 'src/app/service/cocktail.service';
import { Drink } from 'src/app/dto/drink';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DetailCocktailComponent } from '../detail-cocktail/detail-cocktail.component';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [ CommonModule,FormsModule,ReactiveFormsModule, MatDialogModule, MatIconModule],
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {
  drinkDto: Drink[] = [];
  searchTerm: string = '';

  constructor(private cocktailService: CocktailService,private dialog: MatDialog,) {}
  ngOnInit(): void {this. getCocktailsByCategory("Cocktail");
  }

  getCocktailsByCategory(category: string): void {
    this.cocktailService.getCocktailsByCategory(category).subscribe(
      {
        next: (data) => {
          this.drinkDto = data.drinks;
        },
        error: (error) => {
          console.error('Error al obtener los cócteles', error);
        }
      }
    );
  }


  searchCocktailByName( ){
    if (this.searchTerm.trim() !== ''){
    this.cocktailService.searchCocktailByName(this.searchTerm).subscribe(
      {
        next: (data) => {
          this.drinkDto = data.drinks;
        },
        error: (error) => {
          console.error('Error al obtener los cócteles', error);
        }
      }
    );

  }else{
    this. getCocktailsByCategory("Cocktail");
  }
}
openDialog(idCockatail:string ) {
  this.dialog.open(DetailCocktailComponent, {
    width: '500px',
    data: {id: idCockatail }
  });
}
}
