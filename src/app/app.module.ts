import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LastPage } from '../pages/last/last';
import { ModalContentPage } from '../pages/last/last';
import { MapPage } from '../pages/map/map';
import { SearchPage } from '../pages/search/search';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ConnectivityService } from '../providers/connectivity-service';
import { SearchService } from '../providers/search-service';
import { PostData } from '../providers/post-data';
import { AuthService } from '../providers/auth-service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';

function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LastPage,
    MapPage,
    SearchPage,
    SignupPage,
    LoginPage,
    ModalContentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LastPage,
    MapPage,
    SearchPage,
    LoginPage,
    SignupPage,
    ModalContentPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage,  ConnectivityService, SearchService, PostData, AuthService , 
      {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
      }]
})
export class AppModule {}
