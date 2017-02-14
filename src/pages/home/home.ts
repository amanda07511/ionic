import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ConnectivityService } from '../../providers/connectivity-service';
import { PostData } from '../../providers/post-data';
import { AuthService } from '../../providers/auth-service';
import { Geolocation } from 'ionic-native';


declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	@ViewChild('map') mapElement: ElementRef;
  password = '';
  email = '';
  token = '';

  map: any;
  mapInitialised: boolean = false;
  apiKey: any;
  data: any;

  constructor(public nav: NavController, public postData: PostData, public alertCtrl: AlertController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.password = info.password;
    this.email = info.email;
    this.token = info.token;

    console.log(this.token);
    //this.loadGoogleMaps();
    this.nav = nav;
  }

  
  addChecking() {
  	
  	this.data=this.postData.sendInformation(this.token);
  		
  	 let alert = this.alertCtrl.create({
	      title: 'Success',
	      subTitle: 'Send Information success '+this.data,
	      buttons: ['OK']
	    });
	    alert.present();
	}
		
}
