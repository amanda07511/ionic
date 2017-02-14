import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LastService } from '../../providers/last-service';

/*
  Generated class for the LastPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-last-page',
  templateUrl: 'last-page.html',
  providers: [LastService]
})
export class LastPage {

  public checking: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lastService: LastService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LastPagePage');

   this.loadCheckings();
  }//Constructor

  loadCheckings(){
  	this.lastService.load().then(data => {
    this.checking = data;
  	});
}//loadPeople



}
