import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: Loading;
  registerCredentials = {email: '', password: ''};

  constructor(public nav: NavController,  private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

   public login() {

    this.showLoading();

    this.auth.login(this.registerCredentials).then((result) => {
            this.loading.dismiss();
            console.log(result);
            this.nav.setRoot(TabsPage);
        }, (err) => {
            this.showError("Something is wrong, try again!");
            console.log(err);
        });
    

  }//login
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
 
  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Opps',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }


  singup(){
    this.nav.push(SignupPage);
  }

}//export class
