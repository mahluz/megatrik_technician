var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParallaxLayout4 } from './parallax-layout-4';
import { ElasticHeaderModule } from '../../elastic-header/elastic-header.module';
var ParallaxLayout4Module = /** @class */ (function () {
    function ParallaxLayout4Module() {
    }
    ParallaxLayout4Module = __decorate([
        NgModule({
            declarations: [
                ParallaxLayout4,
            ],
            imports: [
                IonicPageModule.forChild(ParallaxLayout4),
                ElasticHeaderModule
            ],
            exports: [
                ParallaxLayout4
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ParallaxLayout4Module);
    return ParallaxLayout4Module;
}());
export { ParallaxLayout4Module };
//# sourceMappingURL=parallax-layout-4.module.js.map