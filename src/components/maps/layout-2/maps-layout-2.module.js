var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsLayout2 } from './maps-layout-2';
import { AppSettings } from '../../../services/app-settings';
import { AgmCoreModule } from '@agm/core';
var MapsLayout2Module = /** @class */ (function () {
    function MapsLayout2Module() {
    }
    MapsLayout2Module = __decorate([
        NgModule({
            declarations: [
                MapsLayout2,
            ],
            imports: [
                AgmCoreModule.forRoot(AppSettings.MAP_KEY),
                IonicPageModule.forChild(MapsLayout2),
            ],
            exports: [
                MapsLayout2
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], MapsLayout2Module);
    return MapsLayout2Module;
}());
export { MapsLayout2Module };
//# sourceMappingURL=maps-layout-2.module.js.map