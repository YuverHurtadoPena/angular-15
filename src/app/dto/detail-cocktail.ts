export class DetailCocktail {
  idDrink: string ;
  strDrink?: string ;

  strCategory?: string;
  strAlcoholic?: string;
  strInstructions?: string;
  strDrinkThumb?: string;
  strIngredients: string[] = [];

  constructor(data: any) {
    this.idDrink = data.idDrink;
    this.strDrink = data.strDrink;
    this.strCategory = data.strCategory;
    this.strAlcoholic = data.strAlcoholic;
    this.strInstructions = data.strInstructions;
    this.strDrinkThumb = data.strDrinkThumb;


    const ingredientKeys = Object.keys(data).filter(key =>
      key.startsWith('strIngredient') && data[key] !== null
    );

    this.strIngredients = ingredientKeys.map(key => data[key]);
  }
}
