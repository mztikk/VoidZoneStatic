"use strict";
var dateoptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};
function dateTimeParse(str) {
    return new Date(str.slice(0, 4) + "-" + str.slice(4, 6) + "-" + str.slice(6, 8) + "T" + str.slice(9, 11) + ":" + str.slice(11, 13) + ":" + str.slice(13, 15));
}
function updateDivDisplays() {
    var divs = document.querySelectorAll('div.box a');
    for (var i = 0; i < divs.length; i++) {
        var element = divs[i];
        element.innerHTML = dateTimeParse(element.innerHTML).toLocaleDateString("de-DE", dateoptions);
    }
}
window.addEventListener('load', updateDivDisplays);