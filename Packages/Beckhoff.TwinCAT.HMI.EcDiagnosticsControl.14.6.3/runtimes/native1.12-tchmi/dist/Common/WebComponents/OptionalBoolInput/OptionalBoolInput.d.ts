export declare const enum OptionalBoolStateOrder {
    'TrueFalseNull' = 0,
    'FalseTrueNull' = 1
}
/** Read only view on the currently online value the input suggests a toggled value for. */
export interface OptionalBoolInputMappedValue {
    readonly value: unknown;
}
export declare class OptionalBoolInput extends HTMLElement {
    constructor();
    private __state;
    private __mappedValue;
    private __stateOrder;
    get value(): boolean | null;
    set value(value: boolean | null);
    connectedCallback(): void;
    mapValue(mappedValue: OptionalBoolInputMappedValue | undefined): void;
    private __updateDom;
    __goToNextState(): void;
}
