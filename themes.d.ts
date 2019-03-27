declare class Theme {
    backColor: string;
    foreColor: string;
    objectColor: string;
    mouseOverColor: string;
    activeColor: string;
    constructor(backColor: string, foreColor: string, objectColor: string, mouseOverColor: string, activeColor: string);
}
declare function typedKeys<T>(o: T): (keyof T)[];
declare const darkTheme: Theme;
declare const themes: {
    [id: string]: Theme;
};
declare function applyTheme(theme: Theme): void;
