import {Component,OnInit,OnDestroy} from '@angular/core';
import{ActivatedRoute} from '@angular/router';

import{IBook} from '../books';
import{BookService} from '../books.service';

import{Subscription} from 'rxjs/Subscription';

@Component({
  moduleId : module.id,
  templateUrl:'book-details.component.html'
})
export class BookDetailsComponent implements OnInit,OnDestroy{
  book:IBook;
  errorMessage:string;

  private sub: Subscription;

  constructor(private _route:ActivatedRoute, private _bookService:BookService){
    console.log(this._route.snapshot.params['id']);
  }

  getBook(id:string){
    this._bookService.getBook(id).subscribe(
      book=>this.book=book,
      error=>this.errorMessage=<any>error
    );
  }

  ngOnInit():void{
    this.sub=this._route.params.subscribe(
      params=>{
        let id=params['id'];
        this.getBook(id);
      }
    );
  }
  ngOnDestroy(){}

}
