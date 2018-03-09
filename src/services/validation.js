/**
 * Created by DRAGAN on 3/22/2017.
 */
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.isMail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidationService;
}());
export { ValidationService };
//# sourceMappingURL=validation.js.map