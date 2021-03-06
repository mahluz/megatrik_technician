var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WizardLayout2 } from './wizard-layout-2';
var WizardLayout2Module = /** @class */ (function () {
    function WizardLayout2Module() {
    }
    WizardLayout2Module = __decorate([
        NgModule({
            declarations: [
                WizardLayout2,
            ],
            imports: [
                IonicPageModule.forChild(WizardLayout2),
            ],
            exports: [
                WizardLayout2
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], WizardLayout2Module);
    return WizardLayout2Module;
}());
export { WizardLayout2Module };
//# sourceMappingURL=wizard-layout-2.module.js.map