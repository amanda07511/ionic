import { Component } from '@angular/core';
import { Platform, NavController, NavParams , ModalController, ViewController } from 'ionic-angular';
import { LastService } from '../../providers/last-service';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';

/*
  Generated class for the Last page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
  declare var google;

@Component({
  selector: 'page-last',
  templateUrl: 'last.html',
  providers: [LastService]
})

export class LastPage {

 
  public people: any;

  constructor(public nav: NavController, public navParams: NavParams, public lastService: LastService, public modalCtrl: ModalController ){
    this.loadPeople();
  }

  
  //get last checkings
  loadPeople(){
      this.lastService.load().then(data => {
      this.people = data;
      });
  }//loadPeople

  getLatLng(lat, lng) {
   console.log("lat: "+lat+" lng: "+lng);
   
   let modal = this.modalCtrl.create(ModalContentPage);
   modal.present();
   
  } 
  
}//LastPage

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-col  width-20></ion-col>
    <ion-col  width-60>
      <div #map id="map"></div> 
    </ion-col> 
    <ion-col  width-20></ion-col>
</ion-content>
`
})

export class ModalContentPage {
  

 
 map: GoogleMap;

  constructor( public platform: Platform, public params: NavParams, public viewCtrl: ViewController ) {
    
    //this.character = characters[this.params.get('charNum')];
  }

  ionViewDidLoad() {
   this.loadMap(); 
  }

  
loadMap(){
 
        let location = new GoogleMapsLatLng(-34.9290,138.6010);
 
        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': location,
            'tilt': 30,
            'zoom': 15,
            'bearing': 50
          }
        });
 
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
            console.log('Map is ready!');
        });
 
}//loadmap


  dismiss() {
    this.viewCtrl.dismiss();
  }//dismiss

}//ModalContentPage

