import type { Localization } from '../../Localization.js';
import type { Slave_ProcessDataObjectEntry } from '../../ServerRespondDef.js';
export declare class ProcessDataHistoryChart extends HTMLElement {
    constructor(entry: Slave_ProcessDataObjectEntry, onToggleHex: () => void, localization?: Localization, propertyKey?: string);
    private __entry;
    private __onToggleHex;
    private __localization?;
    private __propertyKey?;
    private __chartBlocks;
    private __drawIntervalId;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private __getChartSeries;
    private __findSubValue;
    private __reconcileBlocks;
    private __createBlock;
    private __draw;
}
