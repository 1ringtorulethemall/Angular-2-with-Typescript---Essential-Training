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
  inStock: string;
  price: number;
  starRating: number;
  imageUrl: string;

}
