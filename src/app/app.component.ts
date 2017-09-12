
import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'bookstore-app', //=directive, ce qui est placé dans index.html
  templateUrl:'app.component.html',
  /*
  template: ` <!-- ce qui apparait en premier sur la page -->
  <h1>{{title}}</h1>
  <div>{{sousTitre}}</div>
  <bs-welcome></bs-welcome> <!-- affiche welcome.component.ts ( c'est son selector )-->
  `,
  */
})


export class AppComponent  {
  title : string = "Bienvenue sur la librairie";
  sousTitre = 'App Component test';

  searchBox : string = "";

  showBook():void{

  }

}
