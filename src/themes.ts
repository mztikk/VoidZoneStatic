class Theme {
    constructor(public backColor: string, public foreColor: string, public objectColor: string, public mouseOverColor: string, public activeColor: string) {
    }
}

function typedKeys<T>(o: T): (keyof T)[] {
    return Object.keys(o) as (keyof T)[];
}

// const darkTheme: { [id: string]: string; } = {
//     ["backColor"]: "#252526",
//     ["foreColor"]: "#ffffff",
//     ["objectColor"]: "#007ACC",
//     ["mouseOverColor"]: "#52B0EF",
//     ["activeColor"]: "#045185",
// };
const darkTheme: Theme = new Theme("#252526", "#ffffff", "#007ACC", "#52B0EF", "#045185");

const themes: { [id: string]: Theme } = {
    ["Dark"]: darkTheme
}

function applyTheme(theme: Theme) {
    typedKeys(theme).forEach(key => document.documentElement.style.setProperty("--" + key, theme[key]));
}