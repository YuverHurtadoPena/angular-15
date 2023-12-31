import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCocktailByIngredientComponent } from './list-cocktail-by-ingredient.component';

describe('ListCocktailByIngredientComponent', () => {
  let component: ListCocktailByIngredientComponent;
  let fixture: ComponentFixture<ListCocktailByIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCocktailByIngredientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCocktailByIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
