import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' ;
import { FormsModule } from '@angular/forms' ;
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { produitsService } from './produits.service' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { MenuComponent } from './menu/menu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CategoriesComponent } from './categories/categories.component';
import { InscriptionComponent } from './inscription/inscription.component';
//import { AlertPanierComponent } from './alert-panier/alert-panier.component';
import { StoreModule } from '@ngrx/store';
import { PanierComponent } from './panier/panier.component';
import { CompteurComponent } from './compteur/compteur.component';
import { counterReducer } from './panier-modifies.service';
import { ProduitsParCategorieComponent } from './produits-par-categorie/produits-par-categorie.component';
import { FilterPipe } from './filter.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './produits/details/details.component';

//import { count } from 'rxjs/operators';


@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    MenuComponent,
    ConnexionComponent,
    CategoriesComponent,
    PanierComponent,
    CompteurComponent,
    InscriptionComponent,
    //AlertPanierComponent,
    CompteurComponent,
    PanierComponent,
    ProduitsParCategorieComponent,
    FilterPipe,
    NotFoundComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({count : counterReducer} ),
    FontAwesomeModule
  ],
  providers: [produitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
