var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController, LoadingController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, auth, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.params = {};
        this.params.data = {
            "email": "Email",
            "password": "Password",
            "register": "Register",
            "login": "Login",
            "skip": "Skip",
            "logo": "assets/images/logo/login.png"
        };
        this.params.events = {
            onLogin: function (params) {
                var _this = this;
                console.log('onLogin:' + JSON.stringify(params));
                // navCtrl.push('TabsPage');
                //loading
                this.loading = loadingCtrl.create({
                    content: 'please wait...',
                    dismissOnPageChange: true
                });
                this.loading.present();
                auth.login(params).subscribe(function (allowed) {
                    if (allowed) {
                        navCtrl.push('TabsPage');
                    }
                    else {
                        _this.loading.dismiss();
                        var alert_1 = alertCtrl.create({
                            title: 'Fail',
                            subTitle: "Access Denied",
                            buttons: ['OK']
                        });
                        alert_1.present();
                    }
                }, function (error) {
                    _this.loading.dismiss();
                    var alert = alertCtrl.create({
                        title: 'Fail',
                        subTitle: "Access Denied" + error,
                        buttons: ['OK']
                    });
                    alert.present();
                });
            },
            onRegister: function (params) {
                console.log('onRegister:' + JSON.stringify(params));
            },
            onSkip: function (params) {
                console.log('onSkip:' + JSON.stringify(params));
            },
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AuthServiceProvider,
            AlertController,
            LoadingController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map