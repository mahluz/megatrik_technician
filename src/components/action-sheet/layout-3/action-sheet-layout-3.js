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
var ActionSheetLayout3 = /** @class */ (function () {
    function ActionSheetLayout3(actionSheetCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.slider = {};
    }
    ActionSheetLayout3.prototype.slideHasChanged = function (slider, index) {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            }
            else {
                this.data.splice(index, 1);
            }
        }
    };
    ActionSheetLayout3.prototype.onClickEvent = function (index) {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    };
    ActionSheetLayout3.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ActionSheetLayout3.prototype.ngOnChanges = function (changes) {
    };
    ActionSheetLayout3.prototype.presentActionSheet = function (item, index) {
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
    ], ActionSheetLayout3.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ActionSheetLayout3.prototype, "events", void 0);
    __decorate([
        ViewChild(Content),
        __metadata("design:type", Content)
    ], ActionSheetLayout3.prototype, "content", void 0);
    ActionSheetLayout3 = __decorate([
        IonicPage(),
        Component({
            selector: 'action-sheet-layout-3',
            templateUrl: 'action-sheet.html'
        }),
        __metadata("design:paramtypes", [ActionSheetController])
    ], ActionSheetLayout3);
    return ActionSheetLayout3;
}());
export { ActionSheetLayout3 };
//# sourceMappingURL=action-sheet-layout-3.js.map