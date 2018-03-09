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
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';
var WizardService = /** @class */ (function () {
    function WizardService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'wizard'; };
        this.getTitle = function () { return 'Wizard'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple + icon", "theme": "layout1" },
                { "title": "Big image", "theme": "layout2" },
                { "title": "Big Image + Text", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                'toolBarTitle': 'Simple + icon',
                'btnPrev': 'Previous',
                'btnNext': 'Next',
                'btnFinish': 'Finish',
                'items': [
                    {
                        logo: '',
                        iconSlider: 'icon-star-outline',
                        title: 'Fragment Example 1',
                        description: 'Text for Fragment Example 1 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                        buttonNext: 'Next'
                    },
                    {
                        logo: '',
                        iconSlider: 'icon-star-half',
                        title: 'Fragment Example 2',
                        description: 'Text for Fragment Example 2 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                        buttonNext: 'Next',
                        buttonPrevious: 'Previous'
                    },
                    {
                        logo: '',
                        iconSlider: 'icon-star',
                        title: 'Fragment Example 3',
                        description: 'Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                        buttonPrevious: 'Previous',
                        buttonFinish: 'Finish'
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                'toolBarTitle': 'Big image',
                'btnNext': 'Next',
                'btnFinish': 'Finish',
                'items': [
                    {
                        backgroundImage: 'assets/images/avatar-large/1.jpg',
                        title: 'Fragment Example 1'
                    },
                    {
                        backgroundImage: 'assets/images/avatar-large/2.jpg',
                        title: 'Fragment Example 2'
                    },
                    {
                        backgroundImage: 'assets/images/avatar-large/3.jpg',
                        title: 'Fragment Example 3'
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                'btnNext': 'Next',
                'btnFinish': 'Finish',
                'btnSkip': 'Skip',
                'items': [
                    {
                        backgroundImage: 'assets/images/avatar-large/5.jpg',
                        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry 1',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        button: 'Next',
                        skip: 'Skip'
                    },
                    {
                        backgroundImage: 'assets/images/avatar-large/6.jpg',
                        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry 2',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        button: 'Next',
                        skip: 'Skip'
                    },
                    {
                        backgroundImage: 'assets/images/avatar-large/7.jpg',
                        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry 3',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        button: 'Finish',
                        skip: 'Skip'
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onFinish': function (event) {
                    that.toastCtrl.presentToast("Finish");
                }
            };
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                theme: item.theme,
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
    }
    WizardService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('wizard/' + item.theme)
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
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ;
    WizardService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService, ToastService])
    ], WizardService);
    return WizardService;
}());
export { WizardService };
//# sourceMappingURL=wizard-service.js.map