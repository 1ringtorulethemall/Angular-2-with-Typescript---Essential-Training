// fichier créer pour les interfaces et charger books.json

export interface IBook{ // nomenclature : utiliser I pour Interface
  id : string;
  name:string;
  productCode: string;
  releaseDate: Date;
  description: string;
  author: string;
  genre: string;
  specifications: string;
  inStock: boolean;
  price: number;
  starRating: number;
  imageUrl: string;

}
/*
export interface IBook{ // nomenclature : utiliser I pour Interface
  bookTitle : string;
  bookAuthor :string;
  productCode?:string;
  publishedOn: Date;
  bookDescription:string;
  genre?:string;
  specifications?:string;
  inStock:string;
  bookPrice:number;
  bookReviews:number;
  bookImageUrl: string;

}
*/
