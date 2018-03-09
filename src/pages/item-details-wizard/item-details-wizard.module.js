var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageWizard } from './item-details-wizard';
import { WizardLayout1Module } from '../../components/wizard/layout-1/wizard-layout-1.module';
import { WizardLayout2Module } from '../../components/wizard/layout-2/wizard-layout-2.module';
import { WizardLayout3Module } from '../../components/wizard/layout-3/wizard-layout-3.module';
var ItemDetailsPageWizardModule = /** @class */ (function () {
    function ItemDetailsPageWizardModule() {
    }
    ItemDetailsPageWizardModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageWizard,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageWizard),
                WizardLayout1Module, WizardLayout2Module, WizardLayout3Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageWizardModule);
    return ItemDetailsPageWizardModule;
}());
export { ItemDetailsPageWizardModule };
//# sourceMappingURL=item-details-wizard.module.js.map