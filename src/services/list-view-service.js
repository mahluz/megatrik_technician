var ListViewService = /** @class */ (function () {
    function ListViewService() {
        var _this = this;
        this.getId = function () { return 'listViews'; };
        this.getTitle = function () { return 'List views'; };
        this.getAllThemes = function () {
            return [
                { "title": "Expandable", "theme": "expandable", "listView": true },
                { "title": "Drag&Drop", "theme": "dragAndDrop", "listView": true },
                { "title": "Swipe-to-dismiss", "theme": "swipeToDismiss", "listView": true },
                { "title": "Appearance animations", "theme": "appearanceAnimation", "listView": true },
                { "title": "Google Cards", "theme": "googleCards", "listView": true },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return [];
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
        };
    }
    ListViewService.prototype.load = function (url) {
        return null;
    };
    return ListViewService;
}());
export { ListViewService };
//# sourceMappingURL=list-view-service.js.map