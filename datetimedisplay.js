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
function sortDateDivs(a, b) {
    return b.date.getTime() - a.date.getTime();
}
function updateDivDisplays() {
    var summarydiv = document.getElementsByClassName("summaries")[0];
    var divs = summarydiv.children;
    for (var i = 0; i < divs.length; i++) {
        var element = divs[i];
        var aChild = element.children[0];
        if (aChild == null || !(aChild instanceof (HTMLElement))) {
            continue;
        }
        var date = dateTimeParse(aChild.innerText);
        element.date = date;
        aChild.innerText = date.toLocaleDateString("de-DE", dateoptions);
    }
    Array.prototype.slice.call(divs).sort(sortDateDivs).forEach(function (div) {
        summarydiv.appendChild(div);
    });
}
document.addEventListener('DOMContentLoaded', updateDivDisplays);
