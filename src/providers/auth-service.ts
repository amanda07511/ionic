import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
 
  //data: String;
  access: string;
  token: string;
  post: any;


  constructor(public http: Http, public storage: Storage) {
    //Load token if exists
        this.storage.get('token').then((value) => {
            this.token = value;
           
        });  
  }

  public login(credentials) {
      return new Promise((resolve, reject) => {
         console.log(credentials);
        this.http.post('http://checkin-api.dev.cap-liberte.com/auth', JSON.stringify(credentials))
          .subscribe(res => {
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token);
            resolve(data);
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
 
    });

  }//login

  public createAccount(details){

     return new Promise((resolve, reject) => {
        console.log(details);
        this.http.post('http://checkin-api.dev.cap-liberte.com/signup', JSON.stringify(details))
          .subscribe(res => {
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token);
            resolve(data);
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
 
  }//createAccount

  public logout() {
    return Observable.create(observer => {
      this.storage.set('token', '');
      observer.next(true);
      observer.complete();
    });
  }//Logout

}
