import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, AlertController, App } from 'ionic-angular';
import { ConnectivityService } from '../../providers/connectivity-service';
import { PostData } from '../../providers/post-data';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
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

  constructor(public nav: NavController, public postData: PostData,  private auth: AuthService, private app: App) {
    let info = this.auth.getUserInfo();
    this.password = info.password;
    this.email = info.email;
    this.token = info.token;

    //console.log(this.token);
    
    this.loadMap();
    
  }

  loadMap(){
 
    Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }, (err) => {
      console.log(err);
    });
 
  }

  
  addChecking() {
  
  	this.data=this.postData.sendInformation(this.token);
  			 
	}

  public logout() {
    this.auth.logout().subscribe(succ => {
       this.app.getRootNav().setRoot(LoginPage);
    });
  }
		
}
