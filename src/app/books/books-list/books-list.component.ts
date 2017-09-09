import{Component} from '@angular/core';

@Component({
moduleId:module.id,
selector : 'bs-books-list',
templateUrl:'books-list.component.html'


})

export class BooksListComponent{
  imageWidth:number=120;
  showImage : boolean = true;

  bookTitle: string = "à l'époque du grand canyon"
  bookAuthor: string="Tom Jones";
  bookPrice:string="$29.95";
  bookDescription:string="Book of historical fiction";
  bookReviews: Number = 15;
  bookImageUrl: string = "app/assets/images/baloons.jpg";

  toggleImage():void{
    this.showImage=!this.showImage;
  }

}
