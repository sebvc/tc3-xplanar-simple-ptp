import { TcHmiControl, Controls, ObjectResolver } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { EcDiagnostics, type SlaveLayout } from '../Common/main.js';
import '../ControlCommon/FrameworkCoreControl.js';
declare class TcHmiEcSlave extends TcHmiControl.Control {
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
     * Internal reference to the attribute "data-tchmi-slave-addr"
     */
    protected __slaveAddr: number | null | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-layout"
     */
    protected __layout: SlaveLayout | null | undefined;
    /** Reference to the root dom element of the current control template as jquery object. */
    protected __elementTemplateRoot: JQuery;
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __previnit(): void;
    private __themeDataChangedDestroyFn?;
    /**
     * Is called by the system after the control instance gets part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __attach(): void;
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
     * Sets the value of the member variable "slaveAddr" if the new value is not equal to the current value
     * @param valueNew The physical address of the slave to show, null shows the first slave.
     */
    setSlaveAddr(valueNew: number | null): void;
    getSlaveAddr(): number | null | undefined;
    /**
     * Sets the value of the member variable "layout" if the new value is not equal to the current value
     * @param valueNew The arrangement of the sections, null uses the sections below each other.
     */
    setLayout(valueNew: SlaveLayout | null): void;
    /**
     * The watch callback for the layout object resolver.
     */
    protected __onResolverForLayoutCallback(data: ObjectResolver.IWatchResultObject<SlaveLayout | null>): void;
    getLayout(): SlaveLayout | null | undefined;
    protected __processEcDiagnosticsConfig(): void;
}
export { TcHmiEcSlave as Control };
declare const _TcHmiEcSlave: typeof TcHmiEcSlave;
type tTcHmiEcSlave = TcHmiEcSlave;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiEcSlave: typeof _TcHmiEcSlave;
        type TcHmiEcSlave = tTcHmiEcSlave;
    }
}
//# sourceMappingURL=TcHmiEcSlave.esm.d.ts.map