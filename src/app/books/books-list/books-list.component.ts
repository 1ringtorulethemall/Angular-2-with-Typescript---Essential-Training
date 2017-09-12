import{Component, OnInit, OnChanges} from '@angular/core';

//section 10
//import {IBook} from '../books';

/*interface externalisée
interface IBook { // interface
  bookTitle:string;
  bookAuthor:string;
  bookPrice:number;
  bookDescription:string;
  publishedOn : Date;
  inStock:string;
  bookReviews: number;
  bookImageUrl: string;
  hardcover?: boolean; // propriété optionnelle, pas d'erreur si pas de valeur
}
*/

@Component({
moduleId:module.id,
selector : 'bs-books-list',
templateUrl:'books-list.component.html'


})

export class BooksListComponent implements OnInit, OnChanges{

  imageWidth:number=120;
  showImage : boolean = true;
  booksInStock : number =2;

  ngOnInit(){
    console.log('c est l initialisatione et this.booksInStock=',this.booksInStock);
  };
  ngOnChanges(){
    console.log('nouveaux changements détectés')
  };
changeMethod():void{
  this.animals=['chien','chat'];
  console.log('changeMethod() appellée et this.animals =', this.animals);
};
animals: string[]=['zèbre', 'tortue'];

//  books: IBook[]=[{ // section10
  books: any[]=[{
    bookTitle:"à l'époque du grand canyon", // plus de type ni de ;
    bookAuthor:"Tom Jones",
    bookPrice:29.95,
    bookDescription:"Book of historical fiction eeee",
    publishedOn : new Date('02/11/1921'),
    inStock:"yes",
    bookReviews: 15,
    bookImageUrl: "app/assets/images/baloons.jpg",
    hardcover:false
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
    hardcover: true
  }
  ]


/* avant interface
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
*/

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
