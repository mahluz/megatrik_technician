var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuService } from '../services/menu-service';
import { AppSettings } from '../services/app-settings';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
var MyApp = /** @class */ (function () {
    function MyApp(platform, splashScreen, statusBar, menu, menuService, modalCtrl, http, storage, auth) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menu = menu;
        this.menuService = menuService;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.storage = storage;
        this.auth = auth;
        this.rootPage = "HomePage";
        // this.rootPage = "HomePage";
        this.storage.get('token').then(function (token) {
            // console.log(token);
            if (token == null) {
                AppSettings.SHOW_START_WIZARD = true;
                _this.rootPage = "HomePage";
            }
            else {
                AppSettings.SHOW_START_WIZARD = false;
                _this.http.post(_this.auth.url + "api/user", { token: token }).subscribe(function (result) {
                    if (result["response"] != "error") {
                        auth.getUserInfo();
                        _this.rootPage = "TabsPage";
                    }
                    else {
                        _this.rootPage = "LoginPage";
                    }
                }, function (error) {
                    console.log("error init", error);
                    _this.rootPage = "LoginPage";
                });
            }
        });
        this.initializeApp();
        this.pages = menuService.getAllThemes();
        this.leftMenuTitle = menuService.getTitle();
        this.menuService.load(null).subscribe(function (snapshot) {
            _this.params = snapshot;
        });
        if (AppSettings.SHOW_START_WIZARD) {
            this.presentProfileModal();
        }
    }
    MyApp.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create("IntroPage");
        profileModal.present();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            localStorage.setItem("mailChimpLocal", "true");
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        // navigate to the new page if it is not the current page
        if (page.singlePage) {
            this.menu.open();
            this.nav.push(this.getPageForOpen(page.theme), {
                service: this.getServiceForPage(page.theme),
                page: page,
                componentName: page.theme
            });
        }
        else {
            this.nav.setRoot("ItemsPage", {
                componentName: page.theme
            });
        }
    };
    MyApp.prototype.getPageForOpen = function (value) {
        return null;
    };
    MyApp.prototype.getServiceForPage = function (value) {
        return null;
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html',
            providers: [MenuService]
        }),
        __metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            MenuController,
            MenuService,
            ModalController,
            HttpClient,
            Storage,
            AuthServiceProvider])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map