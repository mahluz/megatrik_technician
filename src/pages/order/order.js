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
import { ActionSheetController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController, LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, navParams, actionSheetCtrl, auth, alertCtrl, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.params = {};
        auth.getNearOrder().subscribe(function (result) {
            _this.orders = result["result"];
            console.log(_this.orders);
            _this.params.data = _this.orders;
            _this.params.events = {
                'onLike': function (item) {
                    console.log("Like");
                },
                'onFavorite': function (item) {
                    item.favorite = !item.favorite;
                    console.log("Favorite");
                },
                'onShare': function (item) {
                    console.log("Share", auth.session);
                },
                'onFab': function (item) {
                    console.log(this.orders);
                },
                'onRates': function (index) {
                    console.log("Rates " + (index + 1));
                },
                'onItemClick': function (item) {
                    console.log(item["client"]["biodata"]["home_address"]);
                    var actionSheet = actionSheetCtrl.create({
                        title: 'Modify your album',
                        buttons: [
                            {
                                text: 'Alamat: ' + item["client"]["biodata"]["home_address"],
                                role: 'destructive',
                            }, {
                                text: 'Archive',
                                handler: function () {
                                    console.log('Archive clicked');
                                }
                            }, {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Cancel clicked');
                                }
                            }
                        ]
                    });
                    actionSheet.present();
                },
            };
        });
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPage');
    };
    OrderPage.prototype.showLoading = function (text) {
        this.loading = this.loadingCtrl.create({
            content: text,
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    OrderPage.prototype.showAlert = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    OrderPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-order',
            templateUrl: 'order.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ActionSheetController,
            AuthServiceProvider,
            AlertController,
            LoadingController,
            ToastController])
    ], OrderPage);
    return OrderPage;
}());
export { OrderPage };
//# sourceMappingURL=order.js.map