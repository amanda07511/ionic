import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { SearchService } from '../../providers/search-service';
import 'rxjs/add/operator/debounceTime'

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  searchTerm: string = '';
  items: any;
  searchControl: FormControl;
  searching: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public searchService: SearchService) {
  	this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.setFilteredItems();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
 
            this.searching = false;
            this.setFilteredItems();
            
     });
  }

    onSearchInput(ev: any){
        this.searching = true;
        this.searchTerm = ev.target.value;

    }

  setFilteredItems() {
  	this.items=null;
 	
    this.searchService.load(this.searchTerm).then(data => {
      this.items = data;
    });
	 //console.log(this.searchTerm);
   }

   

}
