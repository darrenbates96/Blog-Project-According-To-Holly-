import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TheblogComponent } from './theblog/theblog.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ThemesComponent } from './themes/themes.component';
import { PoetryComponent } from './poetry/poetry.component';
import { TheblognavComponent } from './theblognav/theblognav.component';

@NgModule({
  declarations: [ //Components that app will need
    AppComponent, HomeComponent, TheblogComponent, FreelanceComponent, AboutComponent, ContactComponent, ThemesComponent, PoetryComponent, TheblognavComponent
  ],
  imports: [ //Modules that the app will need
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
