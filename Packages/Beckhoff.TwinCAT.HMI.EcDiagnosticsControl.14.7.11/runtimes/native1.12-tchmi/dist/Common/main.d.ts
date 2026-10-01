import type { Localization } from './Localization.js';
import { Notifications, NotificationCategory, NotificationLevel } from './Notifications.js';
import { Target } from './Target.js';
import type { Master } from './Master.js';
import type { Slave } from './Slave.js';
import { TopologyView } from './Topology.js';
import { DrawingNetwork } from './DrawingNetwork.js';
import { SlaveView } from './WebComponents/SlaveView/SlaveView.js';
import type { StatusButton } from './WebComponents/StatusButton/StatusButton.js';
import type { ElementWithCallback } from './WebComponents/ElementWithCallback/ElementWithCallback.js';
import type { PopUp } from './WebComponents/PopUp/PopUp.js';
import './WebComponents/PopUp/PopUp.js';
import type { SelectedDevice } from './ServerRespondDef.js';
import type { Communication } from './Communication.js';
export declare class EcDiagnostics {
    constructor(elementRoot: HTMLElement, localization: Localization, commonPath: string, config: ClientConfigControl | ClientConfigStandalone, customTopMostLayerFns?: {
        add: (element: HTMLElement) => void;
        remove: (element: HTMLElement) => void;
    });
    private __slaveView;
    get slaveView(): SlaveView | null;
    /** False while only a single slave is shown instead of the topology. */
    get showsTopology(): boolean;
    private __networkView;
    get networkView(): DrawingNetwork;
    private __commonPath;
    get commonPath(): string;
    private __localization;
    getLocalization(): Localization;
    setCustomTopMostLayerFunction(addFn: (element: HTMLElement) => void, removeFn: (element: HTMLElement) => void): void;
    private __customAddTopMostLayerFunction;
    private __customRemoveTopMostLayerFunction;
    setThemedResource(): void;
    clearAllNotifications(): void;
    get notification(): Notifications;
    clearNotification(category?: string | NotificationCategory, level?: NotificationLevel): void;
    setNotification(text: string, level: NotificationLevel, category: NotificationCategory | string, displayTime?: number): void;
    createNotification(key: string, params: any): void;
    static createElement<T extends HTMLElement>(tagName: string, options?: ElementCreationOptions): T;
    createStatusButton(text: string): StatusButton;
    private __targets;
    private __selectedDevice;
    getSelectedDevice(): SelectedDevice | null;
    private __notification;
    private __localConfig;
    get config(): ClientConfigControl | ClientConfigStandalone;
    private __view;
    private __elementRoot;
    getElementRoot(): HTMLElement;
    private __comObj;
    set comObj(comObj: Communication | null);
    get comObj(): Communication | null;
    displayView(): void;
    get view(): {
        name: TopologyView;
        target?: Target;
        master?: Master;
    };
    updateConfigDevice(device: string, executeInitOnSuccess: boolean): void;
    private __deviceChangeHandler;
    /**
     * Sets a handler which takes over a device change made by the user, e.g. a control which writes its attribute.
     * @param handler Called instead of updating the configuration directly.
     */
    setDeviceChangeHandler(handler: ((device: string) => void) | null): void;
    /** Applies a device which the user selected in the slave view. */
    changeDevice(device: string): void;
    private __slaveAddrChangeHandler;
    /**
     * Sets a handler which takes over a slave selection made in the slave view, e.g. a control which writes its
     * attribute.
     * @param handler Called instead of updating the configuration directly.
     */
    setSlaveAddrChangeHandler(handler: ((slaveAddr: number) => void) | null): void;
    /** Applies a slave which the slave view shows, so the configuration never drifts away from the selection. */
    changeSlaveAddr(slaveAddr: number): void;
    updateConfigAllowZoomAndPan(allowZoomAndPan: boolean, executeInitOnSuccess: boolean): void;
    updateConfigPanBounds(panBounds: PanBounds, executeInitOnSuccess: boolean): void;
    updateConfigZoomMode(zoomMode: ZoomMode, executeInitOnSuccess: boolean): void;
    updateConfigPreviewVisibility(previewVisibility: PreviewVisibility, executeInitOnSuccess: boolean): void;
    /** Selects the configured slave in the slave view, if that slave exists. */
    updateConfigSlaveAddr(slaveAddr: number | null): void;
    /** Sets the arrangement of the panels of the slave view. */
    updateConfigSlaveLayout(slaveLayout: SlaveLayout | null): void;
    /** The arrangement of the slave view, the default one while none is configured. */
    getSlaveLayout(): SlavePanel[];
    /** The options of a section of the slave view, undefined while the section is not part of the layout. */
    getSlavePanel<T extends SlavePanelName>(type: T): Extract<SlavePanel, {
        type: T;
    }> | undefined;
    private __slaveSelectionHandler;
    /**
     * Sets a handler which takes over the slave selection, e.g. a linked control that shows the slave.
     * @param handler Returns true when it has shown the slave, false opens the popup instead.
     */
    setSlaveSelectionHandler(handler: ((slave: Slave) => boolean) | null): void;
    /** Shows the given slave, either in the slave view, in the handler of a linked control or in the popup. */
    showSlave(slave: Slave): void;
    updateConfigToolboxResetView(toolboxResetView: boolean, executeInitOnSuccess: boolean): void;
    updateConfigToolboxZoom(toolboxZoom: boolean, executeInitOnSuccess: boolean): void;
    updateConfigShowZoomDisplay(showZoomDisplay: boolean, executeInitOnSuccess: boolean): void;
    updateConfigExperimentalMode(experimental: boolean, executeInitOnSuccess: boolean): void;
    updateConfigInitTopology(initTopology: InitTopologyView, executeInitOnSuccess: boolean): void;
    private __configDevicesSubscription;
    private __targetSubscription;
    private __initialized;
    preInit(executeInitOnSuccess?: boolean): void;
    init(): void;
    private __symbolAccess;
    getSymbolAccess(symbol: string): boolean;
    private __symbolAccessSubscription;
    private __checkSymbolAccess;
    destroy(): void;
    cleanUp(cleanOnlyFromInit?: boolean): void;
    private __updateTarget;
    setViewMaster(master: Master): void;
    updateView(target: Target, master?: Master): void;
    reload(): void;
    resetView(): void;
    setTopologyView(posX: number, posY: number, zoom: number | null): void;
    /** Position and zoom of the topology view, with the zoom relative to the reference of the configured zoom mode. */
    getTopologyView(): {
        posX: number;
        posY: number;
        zoom: number;
    };
    /** @param minZoomLevel Lower limit relative to the zoom reference, null removes the limit. */
    setZoomLimits(minZoomLevel: number | null, maxZoomLevel: number | null): void;
    private setView;
    private __clearTargets;
    private __addOrUpdateTarget;
    private __templates;
    loadTemplates(): Promise<void>;
    getTemplate<T extends HTMLElement>(name: string): T | null;
    private __contentWrapper;
    get contentWrapper(): HTMLElement;
    addTopMostLayer(element: ElementWithCallback): void;
    addPopUp(popup: PopUp): void;
}
export interface PopUpParameter {
    content: HTMLElement | null;
}
export interface ClientConfigStandalone extends ClientConfigBase {
    tchmiServerHostname: string;
    tchmiServerPort: string;
    tchmiServerSecureConnection: boolean;
    lang: string;
    theme: string;
    logLevel: string;
}
export interface ClientConfigControl extends ClientConfigBase {
}
export interface ClientConfigBase {
    device: string;
    /** 'Slave' shows only a single selectable slave instead of the topology. */
    view?: 'Topology' | 'Slave';
    /** Physical address of the slave which is shown in the slave view. */
    slaveAddr?: number | null;
    /** Arrangement of the panels of the slave view. */
    slaveLayout?: SlaveLayout | null;
    allowZoomAndPan: boolean;
    zoomMode: ZoomMode;
    /** Lower zoom limit relative to the zoom reference, null uses no limit. */
    minZoomLevel: number | null;
    /** Upper zoom limit relative to the zoom reference, null uses no limit. */
    maxZoomLevel: number | null;
    panBounds: PanBounds;
    previewVisibility: PreviewVisibility;
    toolboxResetView: boolean;
    toolboxZoom: boolean;
    showZoomDisplay: boolean;
    /** The Experimental Mode is intended only for those who understand and accept the potential risks,
     * including untested features, unstable functionalities and unexpected behaviors; proceed with caution. */
    experimentalMode: boolean;
    initTopologyViewPosX: number;
    initTopologyViewPosY: number;
    initTopologyViewZoom: number | null;
}
export type PanBounds = 'Free' | 'KeepContentInFrame';
/** Parts of the slave view which can be arranged on their own. */
export declare const slavePanelNames: readonly ['SlaveSelection', 'Trace', 'SlaveDetails', 'ProcessData'];
export type SlavePanelName = (typeof slavePanelNames)[number];
export type SlavePanel = {
    type: 'SlaveSelection';
    sticky?: boolean | null;
} | {
    type: 'Trace';
} | {
    type: 'SlaveDetails';
} | {
    type: 'ProcessData';
    showApply?: boolean | null;
    showForce?: boolean | null;
    showRelease?: boolean | null;
};
/** Arrangement of the panels of the slave view, the panels are placed below each other in the given order. */
export type SlaveLayout = SlavePanel[];
/**
 * The arrangement which an unset layout stands for. It mirrors the defaultValueInternal of the Layout attribute in
 * Description.json, which the control applies before it reaches this config, so both have to stay in sync.
 */
export declare function defaultSlaveLayout(): SlavePanel[];
/** The configured arrangement, the default one while none is configured. */
export declare function resolveSlaveLayout(configured: SlaveLayout | null | undefined): SlavePanel[];
/** Drops unknown and duplicated panels, so the layout can be built without further checks. */
export declare function normalizeSlaveLayout(layout: SlaveLayout): SlavePanel[];
/** Reference of the zoom levels: 'Absolute' renders a terminal with 400px x 100px at 100 %, 'ScaleToFit' fits the complete topology at 100 %. */
export type ZoomMode = 'Absolute' | 'ScaleToFit';
export type PreviewVisibility = 'Always' | 'Never' | 'OnlyWhenZoomedIn';
export interface InitTopologyView {
    pos: {
        x: number;
        y: number;
    };
    zoom: number | null;
}
