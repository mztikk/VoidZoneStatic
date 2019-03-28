declare const dateoptions: {
    day: string;
    month: string;
    year: string;
    hour: string;
    minute: string;
    second: string;
};
declare function dateTimeParse(str: string): Date;
declare function sortDateDivs(a: any, b: any): number;
declare function updateDivDisplays(): void;
