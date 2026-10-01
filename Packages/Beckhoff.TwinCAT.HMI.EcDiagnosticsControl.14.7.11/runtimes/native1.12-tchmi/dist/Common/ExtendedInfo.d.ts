import { Master } from './Master.js';
import { Slave } from './Slave.js';
import type { PopUp } from './WebComponents/PopUp/PopUp.js';
import './WebComponents/StatusButton/StatusButton.js';
import type { PopUpParameter, SlavePanelName } from './main.js';
import { type ContentTabs } from './FrameworkCore.js';
/** Host of an inline rendered slave view, which places the panels in its own layout. */
export interface SlaveViewHost {
    root: HTMLElement;
    getPanelHost(panel: SlavePanelName): HTMLElement | null;
}
/** Element of each panel within the content of the slave popup, the slave selection is added by the view itself. */
export declare const panelSelectors: Partial<Record<SlavePanelName, string>>;
export declare abstract class ExtendedInfo {
    constructor(master: Master, component: 'Master' | 'Slave');
    protected __component: 'Master' | 'Slave';
    protected __popUp: PopUp | null;
    protected __tabName: string | null;
    protected __master: Master;
    /** Host element for an inline rendering, null while the info is shown as popup. */
    protected __host: SlaveViewHost | null;
    protected __open(popUp: PopUp): void;
    destroy(): void;
    close(): void;
    protected __popup_param: PopUpParameter | null;
    abstract updateDrawings(): boolean;
    getScrollTop(): number | undefined;
    setScrollTop(scrollTop: number): void;
}
export declare class ExtendedInfoOfMaster extends ExtendedInfo {
    constructor(master: Master);
    destroy(): void;
    protected __masterContentTabs: ContentTabs | null;
    protected __open(): void;
    updateDrawings(): boolean;
    createSlaveList(): void;
    private __slaveListRecursive;
}
export declare class ExtendedInfoOfSlave extends ExtendedInfo {
    private __slave;
    private __slaveDrawing;
    private __traceDrawing;
    /**
     * @param host Renders the trace and slave view into this host instead of opening a popup.
     */
    constructor(slave: Slave, host?: SlaveViewHost);
    destroy(): void;
    protected __slaveContentTabs: ContentTabs | null;
    protected __open(): void;
    /**
     * Moves the panels of the content into the layout of the host. Panels without a place in the layout stay in the
     * content, which is not shown itself.
     */
    private __distributePanels;
    updateDrawings(): boolean;
}
export type PossibleCtxNames = 'ExtendedInfoOfMaster' | 'ExtendedInfoOfSlave';
