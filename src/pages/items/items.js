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
import { AlertController } from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import { ValidationService } from '../../services/validation';
import { MailChimpService } from '../../services/mail-chimp-service';
import { AppSettings } from '../../services/app-settings';
import { CheckBoxService } from '../../services/check-box-service';
import { TextViewService } from '../../services/text-view-service';
import { SpinnerService } from '../../services/spinner-service';
import { SplashScreenService } from '../../services/splash-screen-service';
import { SearchBarService } from '../../services/search-bar-service';
import { WizardService } from '../../services/wizard-service';
import { TabsService } from '../../services/tabs-service';
import { LoginService } from '../../services/login-service';
import { RegisterService } from '../../services/register-service';
import { ListViewService } from '../../services/list-view-service';
import { ListViewExpandableService } from '../../services/list-view-expandable-service';
import { ListViewDragAndDropService } from '../../services/list-view-drag-and-drop-service';
import { ListViewSwipeToDismissService } from '../../services/list-view-swipe-to-dismiss-service';
import { ListViewAppearanceAnimationService } from '../../services/list-view-appearance-animation-service';
import { ListViewGoogleCardsService } from '../../services/list-view-google-card-service';
import { ListViewStickyListHeaderService } from '../../services/list-view-sticky-list-header-service';
import { ParallaxService } from '../../services/parallax-service';
import { ImageGalleryService } from '../../services/image-gallery-service';
import { MapsService } from '../../services/maps-service';
import { QRCodeService } from '../../services/qrcode-service';
import { RadioButtonService } from '../../services/radio-button-service';
import { RangeService } from '../../services/range-service';
import { ToggleService } from '../../services/toggle-service';
import { SelectService } from '../../services/select-service';
import { ActionSheetService } from '../../services/action-sheet-service';
var ItemsPage = /** @class */ (function () {
    // services: array
    // services: array
    function ItemsPage(navCtrl, textViewService, spinnerService, imageGalleryService, searchBarService, checkBoxService, parallaxService, wizardService, tabsService, listViewService, listViewExpandableService, listViewDragAndDropService, listViewSwipeToDismissService, listViewAppearanceAnimationService, listViewGoogleCardsService, listViewStickyListHeaderService, loginService, registerService, splashScreenService, httpService, validationService, mailChimpService, mapsService, qRCodeService, radioButtonService, rangeService, toggleService, selectService, actionSheetService, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.textViewService = textViewService;
        this.spinnerService = spinnerService;
        this.imageGalleryService = imageGalleryService;
        this.searchBarService = searchBarService;
        this.checkBoxService = checkBoxService;
        this.parallaxService = parallaxService;
        this.wizardService = wizardService;
        this.tabsService = tabsService;
        this.listViewService = listViewService;
        this.listViewExpandableService = listViewExpandableService;
        this.listViewDragAndDropService = listViewDragAndDropService;
        this.listViewSwipeToDismissService = listViewSwipeToDismissService;
        this.listViewAppearanceAnimationService = listViewAppearanceAnimationService;
        this.listViewGoogleCardsService = listViewGoogleCardsService;
        this.listViewStickyListHeaderService = listViewStickyListHeaderService;
        this.loginService = loginService;
        this.registerService = registerService;
        this.splashScreenService = splashScreenService;
        this.httpService = httpService;
        this.validationService = validationService;
        this.mailChimpService = mailChimpService;
        this.mapsService = mapsService;
        this.qRCodeService = qRCodeService;
        this.radioButtonService = radioButtonService;
        this.rangeService = rangeService;
        this.toggleService = toggleService;
        this.selectService = selectService;
        this.actionSheetService = actionSheetService;
        this.alertCtrl = alertCtrl;
        this.pages = {};
        this.listServices = {};
        this.listServices = {
            'checkBoxes': this.checkBoxService,
            'login': this.loginService,
            'register': this.registerService,
            'imageGallery': this.imageGalleryService,
            'textViews': this.textViewService,
            'spinner': this.spinnerService,
            'parallax': this.parallaxService,
            'wizard': this.wizardService,
            'searchBars': this.searchBarService,
            'tabs': this.tabsService,
            'listViews': this.listViewService,
            'expandable': this.listViewExpandableService,
            'dragAndDrop': this.listViewDragAndDropService,
            'swipeToDismiss': this.listViewSwipeToDismissService,
            'appearanceAnimation': this.listViewAppearanceAnimationService,
            'googleCards': this.listViewGoogleCardsService,
            'stickyListHeader': this.listViewStickyListHeaderService,
            'splashScreens': this.splashScreenService,
            'maps': this.mapsService,
            'qrcode': this.qRCodeService,
            'radioButton': this.radioButtonService,
            'range': this.rangeService,
            'toggle': this.toggleService,
            'select': this.selectService,
            'actionSheet': this.actionSheetService
        };
        this.componentName = navParams.get('componentName');
        this.service = this.listServices[this.componentName];
        if (this.service) {
            this.pages = this.service.getAllThemes();
            this.title = this.service.getTitle();
            this.eventTrackView(this.title);
        }
        else {
            navCtrl.setRoot("HomePage");
            return;
        }
    }
    ItemsPage_1 = ItemsPage;
    ItemsPage.prototype.selectPageForOpen = function (value) {
        var page;
        switch (value) {
            case "spinner":
                page = "ItemDetailsPageSpinner";
                break;
            case "textViews":
                page = "ItemDetailsPageTextView";
                break;
            case "splashScreens":
                page = "ItemDetailsPageSplashScreen";
                break;
            case "searchBars":
                page = "ItemDetailsPageSearchBar";
                break;
            case "checkBoxes":
                page = "ItemDetailsPageCheckBox";
                break;
            case "wizard":
                page = "ItemDetailsPageWizard";
                break;
            case "tabs":
                page = "ItemDetailsPageTabs";
                break;
            case "login":
                page = "ItemDetailsPageLogin";
                break;
            case "register":
                page = "ItemDetailsPageRegister";
                break;
            case "expandable":
                page = "ItemDetailsPageExpandable";
                break;
            case "swipeToDismiss":
                page = "ItemDetailsPageSwipeToDismiss";
                break;
            case "dragAndDrop":
                page = "ItemDetailsPageDragAndDrop";
                break;
            case "appearanceAnimation":
                page = "ItemDetailsPageAppearanceAnimation";
                break;
            case "googleCards":
                page = "ItemDetailsPageGoogleCard";
                break;
            case "stickyListHeader":
                page = "ItemDetailsPageStickyListHeader";
                break;
            case "parallax":
                page = "ItemDetailsPageParallax";
                break;
            case "maps":
                page = "ItemDetailsPageMaps";
                break;
            case "imageGallery":
                page = "ItemDetailsPageImageGallery";
                break;
            case "qrcode":
                page = "ItemDetailsPageQRCode";
                break;
            case "radioButton":
                page = "ItemDetailsPageRadioButton";
                break;
            case "range":
                page = "ItemDetailsPageRange";
                break;
            case "toggle":
                page = "ItemDetailsPageToggle";
                break;
            case "select":
                page = "ItemDetailsPageSelect";
                break;
            case "actionSheet":
                page = "ItemDetailsPageActionSheet";
                break;
            default:
                page = "ItemDetailsPage";
        }
        return page;
    };
    ItemsPage.prototype.openPage = function (page) {
        if (AppSettings.SUBSCRIBE) {
            if (this.mailChimpService.showMailChimpForm()) {
                this.mailChimpService.setMailChimpForm(false);
                this.showPrompt();
            }
            else {
                this.navigation(page);
            }
        }
        else {
            this.navigation(page);
        }
    };
    ItemsPage.prototype.navigation = function (page) {
        if (page.listView) {
            this.navCtrl.push(ItemsPage_1, {
                componentName: page.theme
            });
        }
        else {
            this.navCtrl.push(this.selectPageForOpen(this.componentName), {
                service: this.service,
                page: page
            });
        }
    };
    ItemsPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'STAY TUNED FOR NEW <br> THEMES AND FREEBIES',
            message: "SUBSCRIBE TO <br> OUR NEWSLETTER",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Your e-mail'
                },
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        if (data) {
                            if (_this.validationService.isMail(data.email)) {
                                _this.httpService.sendData(data.email).subscribe(function (data) {
                                    _this.mailChimpService.hideMailChimp();
                                }, function (err) {
                                    alert(err);
                                }, null);
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            return false;
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ItemsPage.prototype.eventTrackView = function (event) {
        // debugger;
        //   this.firebase.logEvent("page", event).then(d=>{
        //     debugger;
        //   })
    };
    ItemsPage = ItemsPage_1 = __decorate([
        IonicPage(),
        Component({
            templateUrl: 'items.html',
            providers: [
                MailChimpService, TextViewService, SpinnerService,
                SplashScreenService, LoginService, RegisterService,
                SearchBarService, CheckBoxService, WizardService, TabsService, ParallaxService,
                ListViewService, ListViewExpandableService, ListViewDragAndDropService, ImageGalleryService,
                ListViewSwipeToDismissService, ListViewGoogleCardsService, ListViewAppearanceAnimationService, ListViewStickyListHeaderService,
                HttpService, ValidationService, MapsService, QRCodeService, RadioButtonService, RangeService,
                ToggleService, SelectService, ActionSheetService
            ]
        }),
        __metadata("design:paramtypes", [NavController,
            TextViewService,
            SpinnerService,
            ImageGalleryService,
            SearchBarService,
            CheckBoxService,
            ParallaxService,
            WizardService,
            TabsService,
            ListViewService,
            ListViewExpandableService,
            ListViewDragAndDropService,
            ListViewSwipeToDismissService,
            ListViewAppearanceAnimationService,
            ListViewGoogleCardsService,
            ListViewStickyListHeaderService,
            LoginService,
            RegisterService,
            SplashScreenService,
            HttpService,
            ValidationService,
            MailChimpService,
            MapsService,
            QRCodeService,
            RadioButtonService,
            RangeService,
            ToggleService,
            SelectService,
            ActionSheetService,
            AlertController,
            NavParams])
    ], ItemsPage);
    return ItemsPage;
    var ItemsPage_1;
}());
export { ItemsPage };
//# sourceMappingURL=items.js.map