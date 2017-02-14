import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LastService } from '../../providers/last-service';

/*
  Generated class for the Last page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-last',
  templateUrl: 'last.html',
  providers: [LastService]
})

export class LastPage {

 
  public people: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lastService: LastService ){
    this.loadPeople();
  }

  
  //get last checkings
  loadPeople(){
      this.lastService.load().then(data => {
      this.people = data;
      });
  }//loadPeople


}
