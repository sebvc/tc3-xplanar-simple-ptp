import type { Slave } from '../../Slave.js';
import type { Localization } from '../../Localization.js';
import '../OptionalBoolInput/OptionalBoolInput.js';
export interface EntryGroups {
    prev: {
        names: string[];
        wrapper: HTMLElement[];
        forceFlags: HTMLElement[];
    };
    current: {
        names: string[];
        wrapper: HTMLElement[];
        forceFlags: HTMLElement[];
    };
}
export declare class ProcessDataView extends HTMLElement {
    constructor(slave: Slave, localization: Localization);
    connectedCallback(): void;
    disconnectedCallback(): void;
    private __ecdiagnostics;
    private __slave;
    private __localization;
    private __pdo_types;
    private __allForceBtns;
    private __allReleaseBtns;
    private __onTargetAdsSysServiceChange;
    private __createTableHeaders;
    private __createTableEntries;
    private __createTableEntryParent;
    private __createTableEntry;
    /** Creates one regular table row per sub value of a complex process data entry. */
    private __createSubValueRows;
    private __createSubValueRow;
    /** Creates the prepared value input of a single sub value. */
    private __createSubValuePreparedInput;
    private __messageWrapper;
    private __init;
    private __setAllValues;
    private __forceAllValues;
    private __releaseAllValues;
    private __convertComplexPreparedValue;
    private __applyPropertyValue;
    /** Reads, converts and clears the prepared value of a single sub value. */
    private __getPreparedPropertyValue;
    private __getPreparedPropertyValues;
    private __getPreparedEntryValue;
    private __setValue;
    private __forceValue;
    private __releaseValue;
}
