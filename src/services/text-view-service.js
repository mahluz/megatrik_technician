var TextViewService = /** @class */ (function () {
    function TextViewService() {
        var _this = this;
        this.getId = function () { return 'textViews'; };
        this.getTitle = function () { return 'Typo + small components'; };
        this.getAllThemes = function () {
            return [
                { "title": "All", "theme": "all" },
            ];
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
        };
    }
    TextViewService.prototype.load = function (url) {
        return null;
    };
    return TextViewService;
}());
export { TextViewService };
//# sourceMappingURL=text-view-service.js.map