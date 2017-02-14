import { Injectable } from '@angular/core';
import { Http,  Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostData {

  data: any;

  constructor(public http: Http, public alertCtrl: AlertController) {
    console.log('Hello PostData Provider');
  }

  sendInformation(token: any){

  	console.log("TOKEN EN SENDINFORMATION: -> "+token);

  	let headers = new Headers({
		'Authorization': 'Bearer {{'+token+'}}'
		});
	let options = new RequestOptions({
		headers: headers
	});
	let body = JSON.stringify({
		lat: '47.190729',
		lng: '8.7255348',
		image: 'http://media.v3.grenoble-tourisme.com/filer_public_thumbnails/filer_public/1c/67/1c6757ba-99d6-45c3-b21a-c318c6eba2c4/grenoble_environnement_-_pierre_jayet-2.jpg__3770x2524_q85_crop_subject_location-2154,1382_subsampling-2_upscale.jpg',
	});

	

  	return this.http.post('http://checkin-api.dev.cap-liberte.com/checkin', body, options)
	.map(res => res.json())
	.subscribe(success => {
	    let alert = this.alertCtrl.create({
	      title: 'Success',
	      subTitle: 'Send Information success! checking id: '+success.id,
	      buttons: ['OK']
	    });
	    alert.present();

	}, error => {
	    // An error happened
	    console.log("Something happened! :( "+error);
	}, () => {
	    console.log('Authentication Complete')
	});
  	


  }//Send


  
  	

}//PostData
