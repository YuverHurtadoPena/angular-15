import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailsComponent } from "./components/cocktails/cocktails.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailCocktailComponent } from './components/detail-cocktail/detail-cocktail.component';

@NgModule({
    declarations: [
        AppComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CocktailsComponent,
        BrowserAnimationsModule,
        DetailCocktailComponent,

    ]
})
export class AppModule { }
