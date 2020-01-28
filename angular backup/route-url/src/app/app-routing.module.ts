import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchReasultComponent } from './search-reasult/search-reasult.component';


const routes: Routes = [
  { path:"", redirectTo : "home", pathMatch: "full"},
  { path:"home", component: HomeComponent},
  { path:"contactus", component: ContactComponent},
  { path:"aboutus", component: AboutComponent},
  { path:"search/:searchText", component: SearchReasultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
