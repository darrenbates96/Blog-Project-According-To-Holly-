import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TheblogComponent } from './theblog/theblog.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ThemesComponent } from './themes/themes.component';
import { PoetryComponent } from './poetry/poetry.component';




const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' }, 
  //If no path specified, falls onto home component
  { path: "home", component: HomeComponent },
  { path: "theblog", component: TheblogComponent, children: [
    { path: "themes", component: ThemesComponent, outlet: "blognav" },
    { path: "poetry", component: PoetryComponent, outlet: "blognav" },
  ] },
  { path: "freelance", component: FreelanceComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
