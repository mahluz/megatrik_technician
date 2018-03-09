var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { AuthHttp, AuthConfig, JwtHelper } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = "http://localhost/megatrix_server/public/";
        this.session = {};
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.getUserInfo = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            var access = { token: token };
            _this.http.post(_this.url + 'api/user', access).subscribe(function (user) {
                _this.session.user = user["result"]; // fill data to variable
                return user;
            });
        });
    };
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.post(_this.url + "api/auth/login", credentials).subscribe(function (result) {
                if (result["response"] == "success") {
                    _this.storage.set('token', result["result"]["token"]);
                    observer.next(true);
                    observer.complete();
                }
                else {
                    observer.next(false);
                    observer.complete();
                }
            }, function (error) {
                console.log("error login", error);
                observer.next(error);
                observer.complete();
            });
        });
    };
    AuthServiceProvider.prototype.logout = function () {
        var _this = this;
        this.storage.remove('token');
        return Observable.create(function (observer) {
            _this.session.user = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthServiceProvider.prototype.getService = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.storage.get('token').then(function (token) {
                _this.http.post(_this.url + "api/getService", { token: token }).subscribe(function (result) {
                    observer.next(result);
                    observer.complete();
                }, function (error) {
                    observer.next(error);
                    observer.complete();
                });
            });
        });
    };
    AuthServiceProvider.prototype.getProvince = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.storage.get('token').then(function (token) {
                _this.http.post(_this.url + "api/getProvince", { token: token }).subscribe(function (result) {
                    observer.next(result);
                    observer.complete();
                }, function (error) {
                    observer.next(error);
                    observer.complete();
                });
            });
        });
    };
    AuthServiceProvider.prototype.getRegency = function (province) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.storage.get('token').then(function (token) {
                var access = {
                    token: token,
                    province: province
                };
                _this.http.post(_this.url + "api/getRegency", access).subscribe(function (result) {
                    observer.next(result);
                    observer.complete();
                }, function (error) {
                    observer.next(error);
                    observer.complete();
                });
            });
        });
    };
    AuthServiceProvider.prototype.getDistrict = function (regency) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.storage.get('token').then(function (token) {
                var access = {
                    token: token,
                    regency: regency
                };
                _this.http.post(_this.url + "api/getDistrict", access).subscribe(function (result) {
                    observer.next(result);
                    observer.complete();
                }, function (error) {
                    observer.next(error);
                    observer.complete();
                });
            });
        });
    };
    AuthServiceProvider.prototype.getVillage = function (district) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.storage.get('token').then(function (token) {
                var access = {
                    token: token,
                    district: district
                };
                _this.http.post(_this.url + "api/getVillage", access).subscribe(function (result) {
                    observer.next(result);
                    observer.complete();
                }, function (error) {
                    observer.next(error);
                    observer.complete();
                });
            });
        });
    };
    AuthServiceProvider.prototype.onOrder = function (order) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.storage.get('token').then(function (token) {
                var access = {
                    token: token,
                    order: order,
                    user: _this.session.user
                };
                _this.http.post(_this.url + "api/onOrder", access).subscribe(function (result) {
                    observer.next({ success: true, result: result });
                    observer.complete();
                }, function (error) {
                    observer.next({ success: false, result: error });
                    observer.complete();
                });
            });
        });
    };
    AuthServiceProvider.prototype.getOrder = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.storage.get('token').then(function (token) {
                var access = {
                    token: token,
                    user: _this.session.user
                };
                _this.http.post(_this.url + "api/getOrder", access).subscribe(function (result) {
                    observer.next({ success: true, result: result });
                    observer.complete();
                }, function (error) {
                    observer.next({ success: false, result: error });
                    observer.complete();
                });
            });
        });
    };
    AuthServiceProvider.prototype.completeOrder = function (order) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.storage.get('token').then(function (token) {
                var access = {
                    token: token,
                    order: order
                };
                _this.http.post(_this.url + "api/completeOrder", access).subscribe(function (result) {
                    observer.next({ success: true, result: result });
                    observer.complete();
                }, function (error) {
                    observer.next({ success: false, result: error });
                    observer.complete();
                });
            });
        });
    };
    AuthServiceProvider.prototype.getNearOrder = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.storage.get('token').then(function (token) {
                var access = {
                    token: token,
                    user: _this.session.user
                };
                _this.http.post(_this.url + "api/getNearOrder", access).subscribe(function (result) {
                    observer.next({ success: true, result: result });
                    observer.complete();
                }, function (error) {
                    observer.next({ success: false, result: error });
                    observer.complete();
                });
            });
        });
    };
    AuthServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            Storage])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());
export { AuthServiceProvider };
//# sourceMappingURL=auth-service.js.map