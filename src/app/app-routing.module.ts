import { DetailsComponent } from './produits/details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { CategoriesComponent } from './categories/categories.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';




const routes: Routes = [
  {
    'path':'categories',
    'component':CategoriesComponent
  },

  {
    'path':'membres/inscription',
    'component':InscriptionComponent
  },

  {
    'path':'membres/connexion',
    'component':ConnexionComponent
  },

  {
    'path':'produits',
    'component':ProduitsComponent
  },

  {
    'path':'produits/:categorie',
    'component':ProduitsComponent
  },

  {
    'path':'panier',
    'component':PanierComponent
  },

  {
    'path':'produits/details',
    'component':DetailsComponent
  },

  {
    'path':'notfound',
    'component': NotFoundComponent
  },

  {
    'path':'',
    'component':CategoriesComponent
  },

  {
    'path':'**',
    redirectTo: 'notFound', pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
