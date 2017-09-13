import{Injectable} from '@angular/core';
import{Http} from '@angular/http';
import{IBook} from './books';

@Injectable()
export class BookService{

getBooks():IBook[]{
return[{
  bookTitle:"à l'époque du grand canyon", // plus de type ni de ;
  bookAuthor:"Tom Jones",
  bookPrice:29.95,
  bookDescription:"Book of historical fiction eeee",
  publishedOn : new Date('02/11/1921'),
  inStock:"yes",
  bookReviews: 15,
  bookImageUrl: "app/assets/images/baloons.jpg",

},
{
  bookTitle:"Les fourmis", // plus de type ni de ;
  bookAuthor:"Tom Jones",
  bookPrice:19.95,
  bookDescription:"fourmis",
  publishedOn : new Date('02/11/1921'),
  inStock:"yes",
  bookReviews: 18,
  bookImageUrl: "app/assets/images/baloons.jpg",

}

]

}
}
