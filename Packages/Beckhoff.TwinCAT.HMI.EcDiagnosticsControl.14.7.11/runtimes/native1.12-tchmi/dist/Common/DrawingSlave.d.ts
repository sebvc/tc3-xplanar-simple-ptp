import { DrawingInteraction } from './DrawingInteraction.js';
import { Slave } from './Slave.js';
import type { Dimension } from './Drawing.js';
export declare const DrawingSlaveSettings: {
    scale: number;
    padding: {
        x: number;
        y: number;
    };
};
export declare class DrawingSlave extends DrawingInteraction {
    constructor(slave: Slave);
    private __initSetTimeout;
    private __parentResizeObserver;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /** Scales the fixed-size drawing down when its host panel is smaller. */
    private __fitParent;
    private __slave;
    setInitialDimension(dimension: Dimension): void;
    drawSlave(): void;
    update(): void;
    private __drawPortLabels;
}
