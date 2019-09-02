import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  //Exporting a class allows other components and modules to import it
  //Within the braces are properties and methods of the component class 
  //Constructor = code invoked at first instantiation
  title = 'According to Holly';
}
