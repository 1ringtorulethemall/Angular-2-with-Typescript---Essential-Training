
import { NgModule }      from '@angular/core'; // importer pour qu'on l'utilise dans le décorateur
import { BrowserModule } from '@angular/platform-browser';// pour lancer l'app dans le browser
import { AppComponent }  from './app.component'; // root component de l'application
import { FormsModule} from '@angular/forms';
import {HighlightDirective} from './shared/highlight.directive';
import{RouterModule} from '@angular/router';

import {HttpModule} from '@angular/http';

//aa //import { WelcomeComponent} from'./welcome/welcome.component';
import {BooksListComponent} from './books/books-list/books-list.component';

import{TruncatePipe} from './shared/pipes/truncate.pipe';
import{FavoriteComponent} from './favorites/favorite.component';

import{BookService} from './books/books.service';
import {HomeComponent} from './home/home.component';
import {BookDetailsComponent} from './books/book-details/book-details.component';


@NgModule({ // @NgModule= le décorateur, cad fonction qui ajoute des métadatas à la classe AppModule. Toutes ces métadatas sont passées à la classe AppModule
  imports:      [ BrowserModule,
     FormsModule,
      HttpModule,
       RouterModule.forRoot([
         {path:'home', component: HomeComponent},
         {path:'books',component:BooksListComponent},
         {path:'book/:id',component:BookDetailsComponent},
         {path:"", redirectTo:'home', pathMatch:'full'}, // points d'entrée
         {path:'**',redirectTo:'home',pathMatch:'full'} // tous les autres liens inexistants genre /samere.html
       ]) ],
  //aa //declarations: [ AppComponent, WelcomeComponent ],// contient les components, directives et pipes
  declarations: [ AppComponent, BooksListComponent, HighlightDirective, TruncatePipe, FavoriteComponent, HomeComponent, BookDetailsComponent ],// contient les components, directives et pipes
  bootstrap:    [ AppComponent ] ,// précise quel est le composant du root
  providers:[BookService]
})
export class AppModule { }
