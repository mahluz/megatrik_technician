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
var ServicePage = /** @class */ (function () {
    function ServicePage(navCtrl, navParams, auth, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.params = {};
        this.order = {};
        auth.getService().subscribe(function (service) {
            _this.services = service["result"];
            console.log(_this.services);
        });
        auth.getProvince().subscribe(function (province) {
            _this.provinces = province["result"];
            console.log(_this.provinces);
        });
        this.params = {
            "logo": "assets/images/logo/login-3.png",
            "register": "Submit",
            "username": "Username",
            "province": "Province",
            "regency": "Regency",
            "district": "District",
            "village": "Village",
            "password": "Password",
            "email": "Email",
            "service": "service",
            "button": "submit",
            "skip": "Skip"
        };
    }
    ServicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicePage');
    };
    ServicePage.prototype.getRegency = function () {
        var _this = this;
        console.log("province", this.order["province"]);
        this.auth.getRegency(this.order["province"]).subscribe(function (regency) {
            _this.regencies = regency["result"];
            console.log(_this.regencies);
        });
    };
    ServicePage.prototype.getDistrict = function () {
        var _this = this;
        console.log("regency", this.order["regency"]);
        this.auth.getDistrict(this.order["regency"]).subscribe(function (district) {
            _this.districts = district["result"];
            console.log(district);
        });
    };
    ServicePage.prototype.getVillage = function () {
        var _this = this;
        this.auth.getVillage(this.order["district"]).subscribe(function (village) {
            _this.villages = village["result"];
            console.log(village);
        });
    };
    ServicePage.prototype.onOrder = function () {
        var _this = this;
        console.log(this.order);
        this.showLoading("Please Wait");
        this.auth.onOrder(this.order).subscribe(function (result) {
            if (result['success'] == true) {
                _this.showAlert("Success", "Your Order Has Been Sent");
                console.log(result);
                _this.navCtrl.push('MenuPage');
            }
            else {
                console.log(result);
                _this.showAlert("Error", result["result"]["message"]);
            }
        });
    };
    ServicePage.prototype.showLoading = function (text) {
        this.loading = this.loadingCtrl.create({
            content: text,
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ServicePage.prototype.showAlert = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ServicePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-service',
            templateUrl: 'service.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AuthServiceProvider,
            AlertController,
            LoadingController])
    ], ServicePage);
    return ServicePage;
}());
export { ServicePage };
//# sourceMappingURL=service.js.map