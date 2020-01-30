import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchReasultComponent } from './search-reasult/search-reasult.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from './services/auth-guard.service';
import { ErrorComponent } from './error/error.component';
import { LogOutComponent } from './logout/logout.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';


const routes: Routes = [
  { path:"", redirectTo : "home", pathMatch: "full"},
  { path:"home", component: HomeComponent},
  { path:"contactus", component: ContactComponent},
  { path:"aboutus", component: AboutComponent},
  { path:"login", component: LoginComponent},

 
 
  // add a fallback mapping

  { path:"product", component: ProductListComponent, canActivate : [AuthGuardService]},
  { path:"product-add", component: ProductAddComponent, canActivate : [AuthGuardService]},
  { path:"product-update/:productId", component: ProductUpdateComponent, canActivate : [AuthGuardService]},
  { path:"logout", component:LogOutComponent, canActivate : [AuthGuardService]},
  // <url>/:<name by which data is accessed>
  { path:"search/:searchText", component:  SearchReasultComponent},
  { path:"**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
