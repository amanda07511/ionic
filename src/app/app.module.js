var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
        providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, ConnectivityService, SearchService, PostData, AuthService]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map