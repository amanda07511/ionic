import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export class User {

  email: string;
  password: string;
  token: string;
 
  constructor( email: string, password: string, token: string) {
    this.email = email;
    this.password = password;
    this.token =token;
  }
}


@Injectable()
export class AuthService {
  
  currentUser: User;
  data: string;
  result: any;


  constructor(public http: Http) {
    console.log('Hello AuthService Provider');

  }


  public login(credentials) {
	    if (credentials.email === null || credentials.password === null) {
	      return Observable.throw("Please insert credentials");
	    } else {


	      return Observable.create(observer => {
	        
	        // At this point make a request to your backend to make a real check!
	        this.postInfo(credentials.email,credentials.password);
	        
	        
	        let access = (this.data === "success");
	        this.currentUser = new User(credentials.email, credentials.password, this.result);
	        observer.next(access);
	        observer.complete();
	      });
    }
  }


  public postInfo(email, password){
  	
  	let body = JSON.stringify({
		email: email,
		password: password,
	});


  	return this.http.post(' http://checkin-api.dev.cap-liberte.com/auth', body)
	.map(res => res.json())
	.subscribe(success => {
	    // A success response
	    this.result=success.token;
	    this.data="success";
	    //console.log(success.token);
	}, error => {
	    // An error happened
	    this.result=error.error;
	    this.data="error";
	}, () => {
	    console.log('Authentication Complete')
	});

  }//POSTINFO
 

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }//LOGOUT


   public getUserInfo() : User {
    return this.currentUser;
  }//getUserInfo




}
