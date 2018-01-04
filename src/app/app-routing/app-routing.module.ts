import { HomeComponent } from './../components/home/home.component';
import { ProductDetailComponent } from './../components/product-detail/product-detail.component';


import { SearchComponent } from './../components/search/search.component';
import { SearchResultsComponent } from './../components/search-results/search-results.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home', component: HomeComponent},
  {path : 'search-results', component: SearchResultsComponent},
  {path : 'search', component: SearchComponent},
  {path : 'productdetail/:sku', component: ProductDetailComponent},
];
  @NgModule({
  
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
