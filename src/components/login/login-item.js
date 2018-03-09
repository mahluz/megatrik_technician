var LoginItem = /** @class */ (function () {
    function LoginItem(email, password, register, login, skip, logo, iconAccount, iconKey, iconLock, backgroundImage) {
        this.setEmail(email);
        this.setPassword(password);
        this.setRegister(register);
        this.setLogin(login);
        this.setSkip(skip);
        this.setLogo(logo);
        this.setIconAccount(iconAccount);
        this.setIconKey(iconKey);
        this.setIconLock(iconLock);
        this.setBackgroundImage(backgroundImage);
    }
    LoginItem.prototype.setEmail = function (email) {
        this.email = email;
    };
    LoginItem.prototype.getEmail = function () {
        return this.email;
    };
    LoginItem.prototype.setPassword = function (password) {
        this.password = password;
    };
    LoginItem.prototype.getPassword = function () {
        return this.password;
    };
    LoginItem.prototype.setRegister = function (register) {
        this.register = register;
    };
    LoginItem.prototype.getRegister = function () {
        return this.register;
    };
    LoginItem.prototype.setLogin = function (login) {
        this.login = login;
    };
    LoginItem.prototype.getLogin = function () {
        return this.login;
    };
    LoginItem.prototype.setLogo = function (logo) {
        this.logo = logo;
    };
    LoginItem.prototype.getLogo = function () {
        return this.logo;
    };
    LoginItem.prototype.setSkip = function (skip) {
        this.skip = skip;
    };
    LoginItem.prototype.getSkip = function () {
        return this.skip;
    };
    LoginItem.prototype.setBackgroundImage = function (backgroundImage) {
        this.backgroundImage = backgroundImage;
    };
    LoginItem.prototype.getBackgroundImage = function () {
        return this.backgroundImage;
    };
    LoginItem.prototype.setIconAccount = function (iconAccount) {
        this.iconAccount = iconAccount;
    };
    LoginItem.prototype.getIconAccount = function () {
        return this.iconAccount;
    };
    LoginItem.prototype.setIconKey = function (iconKey) {
        this.iconKey = iconKey;
    };
    LoginItem.prototype.getIconKey = function () {
        return this.iconKey;
    };
    LoginItem.prototype.setIconLock = function (iconLock) {
        this.iconLock = iconLock;
    };
    LoginItem.prototype.getIconLock = function () {
        return this.iconLock;
    };
    return LoginItem;
}());
export { LoginItem };
//# sourceMappingURL=login-item.js.map