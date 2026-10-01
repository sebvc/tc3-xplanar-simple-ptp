// Compatibility file for non-module typescript compiles without adjustments.
// Use the following line for modern code (needs adjustments to tsconfig.json#configOptions/paths)
// import { TcHmiControl } from "Beckhoff.TwinCAT.HMI.Framework/index.esm.js";
// ***************************************************************************




declare class TcHmiEcDiagnostics extends TcHmi.Controls.System.TcHmiControl {
    #private;
    private __pendingTopMostLayerElements;
    private __activeTopMostLayerElements;
    constructor(element: JQuery, pcElement: JQuery, attrs: Controls.ControlAttributeList);
    protected __ecDiagnostics: EcDiagnostics;
    protected __loadTemplatePromise: Promise<void> | null;
    /**
     * Internal reference to the attribute "data-tchmi-device"
     */
    protected __device: string | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-allow-zoom-and-pan"
     */
    protected __allowZoomAndPan: boolean | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-zoom-mode"
     */
    protected __zoomMode: ZoomMode | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-min-zoom-level"
     */
    protected __minZoomLevel: number | null | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-max-zoom-level"
     */
    protected __maxZoomLevel: number | null | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-pan-bounds"
     */
    protected __panBounds: PanBounds | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-preview-visibility"
     */
    protected __previewVisibility: PreviewVisibility | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-toolbox-reset-view"
     */
    protected __toolboxResetView: boolean | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-toolbox-zoom"
     */
    protected __toolboxZoom: boolean | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-show-zoom-display"
     */
    protected __showZoomDisplay: boolean | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-experimental-mode"
     */
    protected __experimentalMode: boolean | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-init-topology-view"
     */
    protected __initTopologyView?: InitTopologyViewFlat | null;
    /**
     * Internal reference to the attribute "data-tchmi-target-controls"
     */
    protected __targetControls: TargetControlEntry[] | null | undefined;
    /** Reference to the root dom element of the current control template as  jquery object. */
    protected __elementTemplateRoot: JQuery;
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __previnit(): void;
    /**
     * If raised, all attributes have been set to it's default or dom values.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __init(): void;
    private __themeDataChangedDestroyFn?;
    /**
     * Is called by the system after the control instance gets part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __attach(): void;
    resetView(): void;
    /** The zoom levels are configured in percent, while the client config uses a factor. */
    private __toZoomFactor;
    /** Returns the current position and zoom of the topology view. The zoom is in percent. */
    getTopologyView(): InitTopologyViewFlat | null;
    /**
     * Sets the position and zoom of the topology view.
     * @param zoom Zoom in percent, null uses the minimum zoom level.
     */
    setTopologyView(posX: number | null, posY: number | null, zoom: number | null): void;
    addTopMostLayer(element: HTMLElement): void;
    removeTopMostLayer(element: HTMLElement): void;
    private __clearTopMostLayerElements;
    __updateTheme(): void;
    /**
     * Is called by the system after the control instance is no longer part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __detach(): void;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
    /**
     * Sets the value of the member variable "device" if the new value is not equal to the current value
     * @param valueNew The new value for device.
     */
    setDevice(valueNew: string | null): void;
    getDevice(): string | undefined;
    /**
     * Sets the value of the member variable "allowZoomAndPan" if the new value is not equal to the current value
     * @param valueNew The new value for boolean allowZoomAndPan.
     */
    setAllowZoomAndPan(valueNew: boolean | null): void;
    getAllowZoomAndPan(): boolean | undefined;
    /**
     * Sets the value of the member variable "zoomMode" if the new value is not equal to the current value
     * @param valueNew The new zoom mode.
     */
    setZoomMode(valueNew: ZoomMode | null): void;
    getZoomMode(): ZoomMode | undefined;
    /**
     * Sets the value of the member variable "minZoomLevel" if the new value is not equal to the current value
     * @param valueNew The lower zoom limit in percent, null removes the limit.
     */
    setMinZoomLevel(valueNew: number | null): void;
    getMinZoomLevel(): number | null | undefined;
    /**
     * Sets the value of the member variable "maxZoomLevel" if the new value is not equal to the current value
     * @param valueNew The upper zoom limit in percent, null removes the limit.
     */
    setMaxZoomLevel(valueNew: number | null): void;
    getMaxZoomLevel(): number | null | undefined;
    /**
     * Sets the value of the member variable "panBounds" if the new value is not equal to the current value
     * @param valueNew The new pan bounds mode.
     */
    setPanBounds(valueNew: PanBounds | null): void;
    getPanBounds(): PanBounds | undefined;
    /**
     * Sets the value of the member variable "previewVisibility" if the new value is not equal to the current value
     * @param valueNew The new preview visibility mode.
     */
    setPreviewVisibility(valueNew: PreviewVisibility | null): void;
    getPreviewVisibility(): PreviewVisibility | undefined;
    /**
     * Sets the value of the member variable "toolboxResetView" if the new value is not equal to the current value
     * @param valueNew The new value for boolean toolboxResetView.
     */
    setToolboxResetView(valueNew: boolean | null): void;
    getToolboxResetView(): boolean | undefined;
    /**
     * Sets the value of the member variable "toolboxZoom" if the new value is not equal to the current value
     * @param valueNew The new value for boolean toolboxZoom.
     */
    setToolboxZoom(valueNew: boolean | null): void;
    getToolboxZoom(): boolean | undefined;
    /**
     * Sets the value of the member variable "showZoomDisplay" if the new value is not equal to the current value
     * @param valueNew The new value for boolean showZoomDisplay.
     */
    setShowZoomDisplay(valueNew: boolean | null): void;
    getShowZoomDisplay(): boolean | undefined;
    /**
     * Sets the value of the member variable "experimentalMode" if the new value is not equal to the current value
     * @param valueNew The new value for boolean experimentalMode.
     *
     * NOTICE: The Experimental Mode is intended only for those who understand and accept the potential risks,
     * including untested features, unstable functionalities and unexpected behaviors; proceed with caution.
     */
    setExperimentalMode(valueNew: boolean | null): void;
    getExperimentalMode(): boolean | undefined;
    protected __processEcDiagnosticsConfig(): void;
    /**
     * Sets the value of the member variable "setInitTopologyView" if the new value is not equal to the current value
     * @param valueNew The new value for object setInitTopologyView.
     */
    setInitTopologyView(valueNew: InitTopologyViewFlat | null): void;
    /**
     * The watch callback for the initTopologyView object resolver.
     */
    protected __onResolverForInitTopologyViewCallback(data: ObjectResolver.IWatchResultObject<InitTopologyViewFlat | null>): void;
    getInitTopologyView(): InitTopologyViewFlat | null | undefined;
    /**
     * Sets the value of the member variable "targetControls" if the new value is not equal to the current value
     * @param valueNew The entries which reference the TcHmiEcSlave controls that show a slave selected in the
     * topology.
     */
    setTargetControls(valueNew: TargetControlEntry[] | null): void;
    /**
     * The watch callback for the targetControls object resolver.
     */
    protected __onResolverForTargetControlsCallback(data: ObjectResolver.IWatchResultObject<TargetControlEntry[] | null>): void;
    /** The entries of the attribute, without those whose reference did not resolve to a control. */
    getTargetControls(): TargetControlEntry[] | null | undefined;
    /** Shows the selected slave in the linked controls instead of opening the popup. */
    protected __showSlaveInTargetControls(slave: {
        addr: number;
    }): boolean;
}
/** Entry of the TargetControls attribute, it wraps the reference of one TcHmiEcSlave control. */
export interface TargetControlEntry {
    control: TcHmiEcSlave;
}
export interface InitTopologyViewFlat {
    posX: number;
    posY: number;
    zoom: number | null;
}
export { TcHmiEcDiagnostics as Control };
declare const _TcHmiEcDiagnostics: typeof TcHmiEcDiagnostics;
type tTcHmiEcDiagnostics = TcHmiEcDiagnostics;
type tInitTopologyViewFlat = InitTopologyViewFlat;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiEcDiagnostics: typeof _TcHmiEcDiagnostics;
        type TcHmiEcDiagnostics = tTcHmiEcDiagnostics;
        namespace TcHmiEcDiagnostics {
            type InitTopologyViewFlat = tInitTopologyViewFlat;
        }
    }
}
