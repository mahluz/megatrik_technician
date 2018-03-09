var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsLayout1 } from './maps-layout-1';
import { ElasticHeaderModule } from '../../elastic-header/elastic-header.module';
import { AppSettings } from '../../../services/app-settings';
import { AgmCoreModule } from '@agm/core';
var MapsLayout1Module = /** @class */ (function () {
    function MapsLayout1Module() {
    }
    MapsLayout1Module = __decorate([
        NgModule({
            declarations: [
                MapsLayout1,
            ],
            imports: [
                ElasticHeaderModule,
                AgmCoreModule.forRoot(AppSettings.MAP_KEY),
                IonicPageModule.forChild(MapsLayout1),
            ],
            exports: [
                MapsLayout1
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], MapsLayout1Module);
    return MapsLayout1Module;
}());
export { MapsLayout1Module };
//# sourceMappingURL=maps-layout-1.module.js.map