var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParallaxLayout2 } from './parallax-layout-2';
import { ElasticHeaderModule } from '../../elastic-header/elastic-header.module';
var ParallaxLayout2Module = /** @class */ (function () {
    function ParallaxLayout2Module() {
    }
    ParallaxLayout2Module = __decorate([
        NgModule({
            declarations: [
                ParallaxLayout2,
            ],
            imports: [
                IonicPageModule.forChild(ParallaxLayout2),
                ElasticHeaderModule
            ],
            exports: [
                ParallaxLayout2
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ParallaxLayout2Module);
    return ParallaxLayout2Module;
}());
export { ParallaxLayout2Module };
//# sourceMappingURL=parallax-layout-2.module.js.map