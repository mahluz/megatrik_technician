var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsLayout3 } from './maps-layout-3';
import { AppSettings } from '../../../services/app-settings';
import { AgmCoreModule } from '@agm/core';
var MapsLayout3Module = /** @class */ (function () {
    function MapsLayout3Module() {
    }
    MapsLayout3Module = __decorate([
        NgModule({
            declarations: [
                MapsLayout3,
            ],
            imports: [
                AgmCoreModule.forRoot(AppSettings.MAP_KEY),
                IonicPageModule.forChild(MapsLayout3),
            ],
            exports: [
                MapsLayout3
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], MapsLayout3Module);
    return MapsLayout3Module;
}());
export { MapsLayout3Module };
//# sourceMappingURL=maps-layout-3.module.js.map