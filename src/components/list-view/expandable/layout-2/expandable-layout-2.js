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
import { IonicPage, Content, FabButton } from 'ionic-angular';
var ExpandableLayout2 = /** @class */ (function () {
    function ExpandableLayout2() {
    }
    ExpandableLayout2.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ExpandableLayout2.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    ExpandableLayout2.prototype.isGroupShown = function (group) {
        return group.show;
    };
    ExpandableLayout2.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (d) {
            _this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ExpandableLayout2.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ExpandableLayout2.prototype, "events", void 0);
    __decorate([
        ViewChild(Content),
        __metadata("design:type", Content)
    ], ExpandableLayout2.prototype, "content", void 0);
    __decorate([
        ViewChild(FabButton),
        __metadata("design:type", FabButton)
    ], ExpandableLayout2.prototype, "fabButton", void 0);
    ExpandableLayout2 = __decorate([
        IonicPage(),
        Component({
            selector: 'expandable-layout-2',
            templateUrl: 'expandable.html'
        }),
        __metadata("design:paramtypes", [])
    ], ExpandableLayout2);
    return ExpandableLayout2;
}());
export { ExpandableLayout2 };
//# sourceMappingURL=expandable-layout-2.js.map