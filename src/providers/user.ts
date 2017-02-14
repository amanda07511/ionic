import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage, LocalStorage } from 'ionic-framework/ionic';



/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class User {
	
  local: Storage;

  constructor(public http: Http) {
   this.local = new Storage(LocalStorage);
  }

  
  
}
