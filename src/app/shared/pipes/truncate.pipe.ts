import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name:'limitChar'
})

export class TruncatePipe implements PipeTransform{
  transform(input : string, limit: number){ // string d'entrée et en sortie nombre max de caractères qu'on peut afficher dans la vue
  if(input)
  return(input.length>limit)?input.substr(0,limit)+"...":input;
  //si la taille du string est plus grande que la limite, alors affiche substring ...
  //sinon affiche le string input

  }
}
