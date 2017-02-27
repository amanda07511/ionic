import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { PostData } from '../../providers/post-data';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { Geolocation, Camera } from 'ionic-native';


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
  apiKey: any;
  data: any;
  lat: any;
  lng: any;
  base64Image

  constructor(public nav: NavController, public postData: PostData,  private auth: AuthService, private app: App) {

    let info = this.auth.getUserInfo();
    this.password = info.password;
    this.email = info.email;
    this.token = info.token;
    
  }
  
  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap(){
 
    Geolocation.getCurrentPosition().then((position) => {
     
      this.lat  = position.coords.latitude;
      this.lng = position.coords.longitude;

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      //console.log("IM INSIDE THE GEOLOCATION")
      //let latLng = new google.maps.LatLng(-34.9290, 138.6010);

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
  
  	this.data=this.postData.sendInformation(this.token, this.lat, this.lng);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
 
    let content = "Last checking!";          
 
    this.addInfoWindow(marker, content);

    console.log("You push add last checking")
  			 
	}

  addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
 
}

  public logout() {
    this.auth.logout().subscribe(succ => {
       this.app.getRootNav().setRoot(LoginPage);
    });
  }

  accessGallery(){
    Camera.getPicture({
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
        this.base64Image = 'data:image/jpeg;base64,'+imageData;
    }, (err) => {
        console.log(err);
    });
  }

		
}
