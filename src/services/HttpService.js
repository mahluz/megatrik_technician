/**
 * Created by DRAGAN on 3/22/2017.
 */
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    Object.defineProperty(HttpService, "parameters", {
        get: function () {
            return [[Http]];
        },
        enumerable: true,
        configurable: true
    });
    HttpService.prototype.sendData = function (email) {
        var url = "http://facebook.us14.list-manage.com/subscribe/post-json?u=2c0f7baa8dc004a62ff3922e3&id=456928d791&EMAIL=" + encodeURI(email) + "&b_2c0f7baa8dc004a62ff3922e3_456928d791";
        var response = this.http.get(url).map(function (res) { return res.json(); });
        return response;
    };
    return HttpService;
}());
export { HttpService };
//# sourceMappingURL=HttpService.js.map