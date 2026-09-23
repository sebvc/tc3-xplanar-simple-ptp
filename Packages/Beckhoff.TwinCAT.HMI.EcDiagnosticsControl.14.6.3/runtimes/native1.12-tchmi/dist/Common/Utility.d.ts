export type HTMLElements = Set<HTMLElement>;
export declare function getRandomInt(max: number): number;
export declare function selectContainsOptionValue(select: HTMLSelectElement, value: string): boolean;
export declare function isDataComplex(val: any): boolean;
export declare function compareObjectsRecursion<T extends object>(oldObj: T, newObj: T, changes: Partial<T>): false | Partial<T>;
export declare function compareObjects<T extends object>(oldObj: T, newObj: T): Partial<T>;
export declare function baseConverter(num: string, baseFrom: number, baseTo: number): string;
export declare function fillStringToLength(character: string, numOfCharacters: number, stringToFillUp: string): string;
export declare function removeNotConnectedDomElements(domElements: Set<HTMLElement> | Map<HTMLElement, any>): void;
export declare function toHexString(dec: number): string;
/**
 * Converts an ISO week date into an ISO date string `YYYY-MM-DD`.
 * @param dayOfWeek 1 = Monday ... 7 = Sunday
 * @returns `null` if the given week date is out of range.
 */
export declare function isoWeekDateToDateString(year: number, calendarWeek: number, dayOfWeek: number): string | null;
