var MailChimpService = /** @class */ (function () {
    function MailChimpService() {
    }
    MailChimpService.prototype.showMailChimpForm = function () {
        var mailChimp = localStorage.getItem("mailChimp") == "true";
        var mailChimpLocal = localStorage.getItem("mailChimpLocal") == "true";
        if (mailChimp) {
            return false;
        }
        else {
            return mailChimpLocal;
        }
    };
    MailChimpService.prototype.setMailChimpForm = function (isVisible) {
        localStorage.setItem("mailChimpLocal", isVisible + "");
    };
    MailChimpService.prototype.hideMailChimp = function () {
        localStorage.setItem("mailChimp", "true");
    };
    return MailChimpService;
}());
export { MailChimpService };
//# sourceMappingURL=mail-chimp-service.js.map