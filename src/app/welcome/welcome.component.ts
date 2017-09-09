import{Component} from '@angular/core';

@Component({
  moduleId: module.id, // besoin pour le templateUrl mais que quand on utilise SystemJs comme loader, pas quand on passe par Angular CLI et les webPacks
  selector:'bs-welcome',
  templateUrl:'welcome.component.html',
  //styles:['.byline{color:green;}'] // dans le html
  styleUrls:['welcome.component.css']
})


export class WelcomeComponent{
  pageTitle : string = "Bienvenue";
}
