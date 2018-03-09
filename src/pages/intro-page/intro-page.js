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
import { IonicPage, ViewController } from 'ionic-angular';
import { IntroService } from '../../services/intro-service';
var IntroPage = /** @class */ (function () {
    function IntroPage(viewCtrl, introService) {
        this.viewCtrl = viewCtrl;
        this.introService = introService;
        this.params = null;
        var that = this;
        this.introService.load().subscribe(function (snapshot) {
            setTimeout(function () {
                that.params = {
                    'events': {
                        'onFinish': function (event) {
                            that.viewCtrl.dismiss();
                        }
                    },
                    'data': snapshot
                };
            });
        });
    }
    IntroPage = __decorate([
        IonicPage(),
        Component({
            templateUrl: 'intro-page.html',
            providers: [IntroService]
        }),
        __metadata("design:paramtypes", [ViewController, IntroService])
    ], IntroPage);
    return IntroPage;
}());
export { IntroPage };
//# sourceMappingURL=intro-page.js.map