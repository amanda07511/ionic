import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LastPage } from '../pages/last/last';
import { MapPage } from '../pages/map/map';
import { SearchPage } from '../pages/search/search';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ConnectivityService } from '../providers/connectivity-service';
import { SearchService } from '../providers/search-service';
import { PostData } from '../providers/post-data';
import { AuthService } from '../providers/auth-service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LastPage,
    MapPage,
    SearchPage,
    LoginPage
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
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ConnectivityService, SearchService, PostData, AuthService]
})
export class AppModule {}
