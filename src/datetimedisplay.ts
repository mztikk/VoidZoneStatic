const dateoptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
}

function dateTimeParse(str: string) {
    return new Date(str.slice(0, 4) + "-" + str.slice(4, 6) + "-" + str.slice(6, 8) + "T" + str.slice(9, 11) + ":" + str.slice(11, 13) + ":" + str.slice(13, 15));
}

// any to accept our divs with added Date
function sortDateDivs(a: any, b: any) {
    return b.date.getTime() - a.date.getTime();
}

function updateDivDisplays() {
    // var divs = document.querySelectorAll('div.box a');
    const summarydiv = document.getElementsByClassName("summaries")[0]
    const divs = summarydiv.children;
    for (let i = 0; i < divs.length; i++) {
        const element = divs[i];
        const aChild = element.children[0];
        if (aChild == null || !(aChild instanceof (HTMLElement))) {
            continue;
        }

        const date = dateTimeParse(aChild.innerText);
        (<any>element).date = date;

        aChild.innerText = date.toLocaleDateString("de-DE", dateoptions);
    }

    // sort by date to get newest listed first
    Array.prototype.slice.call(divs).sort(sortDateDivs).forEach(function (div) {
        summarydiv.appendChild(div)
    });
}

document.addEventListener('DOMContentLoaded', updateDivDisplays);