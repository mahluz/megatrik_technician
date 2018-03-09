var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, ActionSheetController } from 'ionic-angular';
var ActionSheetLayout1 = /** @class */ (function () {
    function ActionSheetLayout1(actionSheetCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.headerImage = "";
    }
    ActionSheetLayout1.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ActionSheetLayout1.prototype.ngOnChanges = function (changes) {
        if (changes.data && changes.data.currentValue) {
            this.headerImage = changes.data.currentValue.headerImage;
        }
        this.subscribeToIonScroll();
    };
    ActionSheetLayout1.prototype.ngAfterViewInit = function () {
        this.subscribeToIonScroll();
    };
    ActionSheetLayout1.prototype.isClassActive = function () {
        return this.active;
    };
    ActionSheetLayout1.prototype.subscribeToIonScroll = function () {
        var _this = this;
        if (this.content != null && this.content.ionScroll != null) {
            this.content.ionScroll.subscribe(function (d) {
                if (d.scrollTop < 200) {
                    _this.active = false;
                    return;
                }
                _this.active = true;
            });
        }
    };
    ActionSheetLayout1.prototype.presentActionSheet = function (item, index) {
        var that = this;
        this.data.actionSheet.buttons.forEach(function (element) {
            element["handler"] = function () {
                that.onEvent("onItemClickActionSheet", { "button": element, "item": item }, null);
            };
        });
        var actionSheet = this.actionSheetCtrl.create(this.data.actionSheet);
        actionSheet.present();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ActionSheetLayout1.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ActionSheetLayout1.prototype, "events", void 0);
    __decorate([
        ViewChild(Content),
        __metadata("design:type", Content)
    ], ActionSheetLayout1.prototype, "content", void 0);
    ActionSheetLayout1 = __decorate([
        IonicPage(),
        Component({
            selector: 'action-sheet-layout-1',
            templateUrl: 'action-sheet.html'
        }),
        __metadata("design:paramtypes", [ActionSheetController])
    ], ActionSheetLayout1);
    return ActionSheetLayout1;
}());
export { ActionSheetLayout1 };
//# sourceMappingURL=action-sheet-layout-1.js.map