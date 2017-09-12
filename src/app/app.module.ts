
import { NgModule }      from '@angular/core'; // importer pour qu'on l'utilise dans le décorateur
import { BrowserModule } from '@angular/platform-browser';// pour lancer l'app dans le browser
import { AppComponent }  from './app.component'; // root component de l'application
import { FormsModule} from '@angular/forms';
import {HighlightDirective} from './shared/highlight.directive';

//aa //import { WelcomeComponent} from'./welcome/welcome.component';
import {BooksListComponent} from './books/books-list/books-list.component';

import{TruncatePipe} from './shared/pipes/truncate.pipe';


@NgModule({ // @NgModule= le décorateur, cad fonction qui ajoute des métadatas à la classe AppModule. Toutes ces métadatas sont passées à la classe AppModule
  imports:      [ BrowserModule, FormsModule ],
  //aa //declarations: [ AppComponent, WelcomeComponent ],// contient les components, directives et pipes
  declarations: [ AppComponent, BooksListComponent, HighlightDirective, TruncatePipe ],// contient les components, directives et pipes
  bootstrap:    [ AppComponent ] // précise quel est le composant du root
})
export class AppModule { }
