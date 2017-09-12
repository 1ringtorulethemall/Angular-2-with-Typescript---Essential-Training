import{Component} from '@angular/core';

@Component({
moduleId:module.id,
selector : 'bs-books-list',
templateUrl:'books-list.component.html'


})

export class BooksListComponent{
  imageWidth:number=120;
  showImage : boolean = true;
  booksInStock : number =2;


  books: any[]=[{
    bookTitle:"à l'époque du grand canyon", // plus de type ni de ;
    bookAuthor:"Tom Jones",
    bookPrice:29.95,
    bookDescription:"Book of historical fiction",
    publishedOn : new Date('02/11/1921'),
    inStock:"yes",
    bookReviews: 15,
    bookImageUrl: "app/assets/images/baloons.jpg",
  },
  {
    bookTitle:"Les fourmis", // plus de type ni de ;
    bookAuthor:"Tom Jones",
    bookPrice:29.95,
    bookDescription:"fourmis",
    publishedOn : new Date('02/11/1921'),
    inStock:"yes",
    bookReviews: 15,
    bookImageUrl: "app/assets/images/baloons.jpg",
  }
]

  //tableau d'objets
  /* mis entre crochets pour section8 pipes
  books: any[]=[{
    bookTitle:"à l'époque du grand canyon", // plus de type ni de ;
    bookAuthor:"Tom Jones",
    bookPrice:"$29.95",
    bookDescription:"Book of historical fiction",
    bookReviews: 15,
    bookImageUrl: "app/assets/images/baloons.jpg",
  },
  {
    bookTitle:"à l'époque du grand canyon", // plus de type ni de ;
    bookAuthor:"Tom Jones",
    bookPrice:"$29.95",
    bookDescription:"Book of historical fiction",
    bookReviews: 15,
    bookImageUrl: "app/assets/images/baloons.jpg",
  }
]
*/

  /*
  mis dans le tableau books et dans books-list.component.html plus <img [src]="bookImageUrl" mais <img [src]="book.bookImageUrl"
  bookTitle: string = "à l'époque du grand canyon";
  bookAuthor: string="Tom Jones";
  bookPrice:string="$29.95";
  bookDescription:string="Book of historical fiction";
  bookReviews: Number = 15;
  bookImageUrl: string = "app/assets/images/baloons.jpg";
  */

  toggleImage():void{
    this.showImage=!this.showImage;
  }

}
