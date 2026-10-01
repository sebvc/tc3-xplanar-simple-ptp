import type { Localization } from '../../Localization.js';
import type { Master } from '../../Master.js';
import type { EcDiagnostics } from '../../main.js';
/**
 * Shows the panels of a single slave, which is selected with a combobox. Which panels are shown and in which order
 * is configured by the control.
 */
export declare class SlaveView extends HTMLElement {
    /** Selected slave per master, so the selection is kept over a reload. */
    private static readonly __selectionStorage;
    /** Several slave views can be shown at the same time, so their input ids have to differ. */
    private static __instanceCount;
    private readonly __idPrefix;
    constructor(main: EcDiagnostics, localization: Localization);
    private __main;
    private __localization;
    private __master;
    private __selectedAddr;
    private __shownSlave;
    /** Address which was handed to the control last, so a selection is not reported twice. */
    private __notifiedAddr;
    private __extendedInfo;
    private __select;
    private __deviceSelect;
    private __headline;
    private __headlineTitle;
    private __headlineDetails;
    private __content;
    private __message;
    private __header;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /** Keeps a label together with its control when the header wraps. */
    private __createField;
    private __deviceSubscription;
    /** Offers the devices which are configured in the server extension. */
    private __subscribeDevices;
    private __updateDeviceList;
    /** Names of the devices which the server extension has configured. */
    private __configuredDevices;
    /** Offer of the last built options, so an open dropdown is not rebuilt with every tick. */
    private __offeredDevices;
    /**
     * Offers every configured device. The configured device of the control is offered as well, even when it is not
     * configured in the server extension, so the shown selection stays the one the view works with.
     */
    private __updateDeviceOptions;
    private __onDeviceChanged;
    /** Sets the master whose slaves are offered in the combobox. */
    setMaster(master: Master | null): void;
    /** Selects the slave which is configured by the control, if it is part of the topology. */
    applySlaveAddr(): void;
    /** Selects the slave with the given physical address, e.g. requested by a click within the view. */
    selectSlave(address: number): void;
    private __onSelectionChanged;
    /**
     * Hands the shown slave to the control, so its attribute follows the selection. Without that write back the
     * control would drop a repeated request for an address which the view no longer shows.
     */
    private __notifySelection;
    private __restoredSelection;
    private __storeSelection;
    private __updateSlaveList;
    private __showSlave;
    /** Moves the already built panels into the new arrangement, rebuilding them would lose their live data. */
    updateLayout(): void;
    private __panelHosts;
    private __layoutHost;
    /** Creates the containers of the configured arrangement, the panels are placed into them afterwards. */
    private __buildLayout;
    /** A sticky selection is placed outside of the scrolled sections, above or below them. */
    private __placeSelection;
    private __createGroup;
    private __createPanelHost;
    private __layout;
    /** With only the process data the table scrolls itself, which keeps its column headers in place. */
    private __applyPanelStyles;
    private __showsOnlyProcessData;
    /** Registers the message for the given key, an undefined key clears it also for a later language change. */
    private __setMessage;
    private __updateHeadline;
    private __getSelectedSlave;
}
