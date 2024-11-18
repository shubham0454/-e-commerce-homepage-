import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FoodComponent } from './component/food/food.component';
import { ClothesComponent } from './component/clothes/clothes.component';
import { HomeDecorsComponent } from './component/home-decors/home-decors.component';
import { ProductsComponent } from './component/products/products.component';
import { RentalsComponent } from './component/rentals/rentals.component';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'food', component: FoodComponent },
  { path: 'clothes', component: ClothesComponent },
  { path: 'home-decors', component: HomeDecorsComponent},
  { path: 'products', component:ProductsComponent},
  { path: 'rentals', component: RentalsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
