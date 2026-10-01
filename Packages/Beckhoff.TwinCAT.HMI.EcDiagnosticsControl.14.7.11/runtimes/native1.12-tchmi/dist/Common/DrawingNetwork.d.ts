import { DrawingInteraction } from './DrawingInteraction.js';
import type { EcDiagnostics } from './main.js';
import type { Network } from './Network.js';
import { Layers } from './Layer.js';
import { type Port } from './Port.js';
import { Master } from './Master.js';
import { Slave } from './Slave.js';
import { type SlaveGroup, SlaveTerminalGroup } from './SlaveGroup.js';
export declare function createElementAndAddText(elementType: string, content: string): HTMLElement;
export declare class DrawingNetwork extends DrawingInteraction {
    constructor(main: EcDiagnostics, network?: Network, redrawFn?: () => void);
    private __toolbox;
    private __toolboxResetViewButton;
    private __toolboxZoomInButton;
    private __toolboxZoomOutButton;
    private __preview;
    private __previewLayers;
    private __previewViewport;
    private __previewDragging;
    /** Size of the preview content box, kept unrounded so it matches the aspect ratio of the drawing exactly. */
    private __previewSize;
    /** Mapping captured while dragging, so the view does not drift when the preview rescales. */
    private __previewDragMapping;
    /** Topology point targeted by the running wheel zoom gesture. */
    private __previewWheelTarget;
    private __drawingPreview;
    private static readonly __previewMaxSize;
    private __stopEventPropagation;
    private __createToolboxZoomButton;
    init(master: Master, redrawnFn: () => void): void;
    deinit(): void;
    updatePreview(components: readonly (Master | Slave | SlaveGroup)[]): void;
    protected __addEventTarget(value: Parameters<DrawingInteraction['__addEventTarget']>[0]): void;
    updateHover(event?: PointerEvent): void;
    /** Maps topology coordinates onto the preview, which shows the topology and, once panned away from it, the way back. */
    private __getPreviewMapping;
    private __syncPreviewViewport;
    private __onPreviewDoubleClick;
    private __onPreviewPointerDown;
    /** Keeps the drag alive outside of the preview. Synthetic events have no active pointer to capture. */
    private __capturePreviewPointer;
    private __releasePreviewPointer;
    private __onPreviewPointerMove;
    private __onPreviewPointerUp;
    private __panToPreviewPoint;
    /** Zooms the topology with the mouse wheel to the topology point below the pointer. */
    private __onPreviewWheel;
    /**
     * Topology point the wheel zoom moves to. Every zoom step changes the preview mapping, so the point is kept for
     * the whole wheel gesture. Otherwise the same pointer position would target a different point on each step.
     */
    private __getPreviewWheelTarget;
    /** Moves the view so the given topology point is in the center of the frame. */
    private __centerWorldPoint;
    private __redrawTimeout;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private __network;
    get network(): Network | undefined;
    get master(): Master | undefined;
    initDrawing(): void;
    resetView: () => void;
    private __zoomIn;
    private __zoomOut;
    private __zoomAtViewCenter;
    drawCableLinkConnectionOrientation(outputPort: Port, layers: Layers): void;
    drawCableLinkConnectionRedundancyOrientation(inputPort: Port, layers: Layers): void;
    private __getConnectionOrientationGradient;
    drawCableLinkConnection(inputPort: Port, layers: Layers): void;
    drawCableLinkConnectionRedundancy(inputPort: Port, layers: Layers): void;
    drawComponent(component: Master | Slave | SlaveGroup, layers: Layers): void;
    drawSlave(slave: Slave, layers: Layers): void;
    private __drawTraceFlag;
    drawSlaveCouplerGroup(coupler: Slave, layers: Layers): void;
    drawSlaveTerminalGroup(slaveTerminalGroup: SlaveTerminalGroup, layers: Layers): void;
    drawMaster(master: Master, layers: Layers): void;
    __addMasterEventTarget(master: Master, layers: Layers): void;
    drawMasterPort(master: Master, layers: Layers): void;
    drawMasterRedundancyPort(master: Master, layers: Layers): void;
    drawMasterFlag(master: Master, layers: Layers): void;
}
