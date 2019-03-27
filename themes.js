"use strict";
var _a;
var Theme = (function () {
    function Theme(backColor, foreColor, objectColor, mouseOverColor, activeColor) {
        this.backColor = backColor;
        this.foreColor = foreColor;
        this.objectColor = objectColor;
        this.mouseOverColor = mouseOverColor;
        this.activeColor = activeColor;
    }
    return Theme;
}());
function typedKeys(o) {
    return Object.keys(o);
}
var darkTheme = new Theme("#252526", "#ffffff", "#007ACC", "#52B0EF", "#045185");
var themes = (_a = {},
    _a["Dark"] = darkTheme,
    _a);
function applyTheme(theme) {
    typedKeys(theme).forEach(function (key) { return document.documentElement.style.setProperty("--" + key, theme[key]); });
}
