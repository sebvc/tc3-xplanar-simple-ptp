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
    private static readonly __viewStorage;
    private static readonly __icons;
    constructor(slave: Slave, localization: Localization);
    connectedCallback(): void;
    disconnectedCallback(): void;
    private __ecdiagnostics;
    private __slave;
    private __localization;
    private __pdo_types;
    private __allForceBtns;
    private __allReleaseBtns;
    /** An action needs the rights on the server and has to be enabled by the control. */
    private __canSet;
    private __canForce;
    private __canRelease;
    /** The prepared value is only of use when it can be applied or forced. */
    private __showsPreparedValue;
    private __flatView;
    private __groupToggles;
    private __chartToggles;
    private __expandGroupsButton;
    private __collapseGroupsButton;
    private __groupsActions;
    private __onTargetAdsSysServiceChange;
    private __createTableHeaders;
    private __createTableEntries;
    private __createTableEntryParent;
    private __createTableEntry;
    /** Creates one regular table row per sub value of a complex process data entry. */
    private __createSubValueRows;
    /** Renders only leaf values of a composite entry, using their complete channel path as label. */
    private __createFlatSubValueRows;
    private __createSubValueRow;
    /** Creates the prepared value input of a single sub value. */
    private __createSubValuePreparedInput;
    private __messageWrapper;
    private __init;
    private __toggleFlatView;
    private __createViewToggle;
    private __createGroupsActions;
    private __createGroupsToggle;
    private __updateGroupsToggle;
    private __expandGroups;
    private __collapseGroups;
    private __updateGroupsButtons;
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
