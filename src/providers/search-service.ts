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

  constructor(public http: Http) {
    console.log('Hello SearchService Provider');
    
  }

  load(searchTerm) {
    
	
	 console.log('http://checkin-api.dev.cap-liberte.com/checkin/'+searchTerm);
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('http://checkin-api.dev.cap-liberte.com/checkin/'+searchTerm)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data =  data;
          resolve(this.data);
        });
    });
  }





}