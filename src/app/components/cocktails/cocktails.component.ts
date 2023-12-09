import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailService } from 'src/app/service/cocktail.service';
import { Drink } from 'src/app/dto/drink';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {
  drinkDto: Drink[] = [];
  searchTerm: string = '';

  constructor(private cocktailService: CocktailService) {}
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

}
