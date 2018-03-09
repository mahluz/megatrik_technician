var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';
var IntroService = /** @class */ (function () {
    function IntroService(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getData = function () {
            return {
                "btnPrev": "Previous",
                "btnNext": "Next",
                "btnFinish": "Finish",
                "items": [
                    {
                        "logo": "assets/images/logo/2.png",
                        "title": "Welcome to our new iOS style theme",
                        "description": "Finished layouts and components for Ionic 3. Ready to use!"
                    },
                    {
                        "logo": "assets/images/logo/2.png",
                        "title": "For Developers",
                        "description": "Save hours of developing. Tons of funcional components."
                    },
                    {
                        "logo": "assets/images/logo/2.png",
                        "title": "For Designers",
                        "description": "Endless possibilities. Combine layouts as you wish."
                    }
                ]
            };
        };
    }
    IntroService.prototype.load = function () {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('intro')
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new Observable(function (observer) {
                that.loadingService.hide();
                observer.next(_this.getData());
                observer.complete();
            });
        }
    };
    ;
    IntroService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService])
    ], IntroService);
    return IntroService;
}());
export { IntroService };
//# sourceMappingURL=intro-service.js.map