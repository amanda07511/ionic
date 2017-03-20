import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SearchService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SearchService {

  data: any;
  items: any;
  url: any;
  item : any; 

  constructor(public http: Http) {
    console.log('Hello SearchService Provider');
    this.item="";
  }

  load(searchTerm) {
    
    
	 console.log('http://checkin-api.dev.cap-liberte.com/checkin/'+searchTerm);
    
    return new Promise(resolve => {
      this.http.get('http://checkin-api.dev.cap-liberte.com/checkin/'+searchTerm)
        .map(res => res.json())
        .subscribe(data => {
          this.data =  data;
          resolve(this.data);
        });
    });
  }





}
