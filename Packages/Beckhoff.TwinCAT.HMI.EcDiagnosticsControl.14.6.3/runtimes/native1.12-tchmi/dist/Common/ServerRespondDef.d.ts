import type { PortPhysic } from './Port.js';
import type { ProcessDataOnlineEntry } from './DOMUtility.js';
import type { OptionalBoolInput } from './WebComponents/OptionalBoolInput/OptionalBoolInput.js';
export interface ConfigDetails {
    targetNetId: string;
    masterNetId: string;
}
export interface TimestampValue {
    ts: number;
    value: number;
    forced: boolean;
}
export interface SlaveAddrs {
    /** For example 0 */
    autoInc: number;
    /** For example 1001 */
    phys: number;
}
export interface SelectedDevice {
    targetNetId: string;
    masterNetId: string;
}
export interface SR_Config_Devices {
    [key: string]: SR_Config_Device;
}
export interface SR_Config_Device {
    enabled: boolean;
    targetNetId: string;
    masterNetId: string;
}
export interface SR_GetTarget {
    available: boolean;
    config: {
        masterNetId: string;
    };
    name: string;
    netId: string;
    sysServiceAdsState: number;
}
export interface SR_GetMaster {
    netId: string;
    name: string;
}
export interface SR_GetSlaves {
    config: ConfigDetails;
    slavesCount: number;
    disabledSlaves: SR_Slave[];
    hotConnectGroups: SR_Slave[];
    master: SR_GetSlaves_Master;
}
export interface SR_GetSlaves_Master {
    configuredSlave: SR_Slave;
    portPhysic: PortPhysic;
}
export interface SR_Slave {
    EtherCAT: SR_Slave_EtherCAT;
    hotConnect: SR_Slave_HotConnect;
    ports: [SR_Slave_Port, SR_Slave_Port, SR_Slave_Port, SR_Slave_Port];
    processData?: Slave_ProcessData;
}
export interface SR_Slave_EtherCAT {
    identity: SR_Slave_Identity;
    syncUnitsAssignment: number[];
}
export interface Slave_ProcessData {
    input: Slave_ProcessDataObject[];
    output: Slave_ProcessDataObject[];
}
export interface Slave_ProcessDataObject {
    index: string;
    name: string;
    entries: Slave_ProcessDataObjectEntry[];
    atLeastOneEntryForced?: boolean;
    atLeastOneEntryForcedDomElements?: Set<HTMLElement>;
}
export interface Slave_ProcessDataSubItem {
    /** The name as it is displayed, for example "FSoE CRC_0" or "[3]". */
    name: string;
    /** The full path below the process data entry, for example "FSoE Data[3]". */
    path: string;
    /** For example "UINT16" */
    type: string;
    /** Bit offset relative to the start of the process data entry. */
    bitOffset: number;
    bitLength: number;
    subItems?: Slave_ProcessDataSubItem[];
}
export interface Slave_ProcessDataObjectEntry {
    /**  For example 1 */
    bitLength: number;
    /** For example "#x6000" */
    index: string;
    /** For example "1"*/
    subIndex: string;
    /** For example "Output 1" */
    name: string;
    /** For example "BIT" */
    type: string;
    /** Structure of a composite entry, reported by the server. */
    subItems?: Slave_ProcessDataSubItem[];
    value?: ProcessDataOnlineEntry<any>;
    showValueAsHex?: boolean;
    preparedValue?: HTMLInputElement | OptionalBoolInput;
    preparedValueByProperty?: Record<string, HTMLInputElement | OptionalBoolInput>;
    /** Force state of every sub value, keyed by the sub value path reported by the server. */
    forcedProperties?: Record<string, boolean>;
    /** Online elements of every sub value, keyed by the sub value path reported by the server. */
    propertyOnlineElements?: Record<string, ProcessDataPropertyOnlineElements>;
    historyValue?: TimestampValue[];
    historyValueByProperty?: Record<string, TimestampValue[]>;
    historyChartUpdateInterval?: number;
    historyChartShowValuesRange?: boolean;
    historyChartsVisible?: Set<HTMLElement>;
}
export interface ProcessDataPropertyOnlineElements {
    valueElements: Set<HTMLElement>;
    forcedElements: Set<HTMLElement>;
}
export interface Slave_ProcessDataValueObjectEntry {
    index: string;
    subIndex: string;
    value: any;
    error?: {
        code?: number;
        message?: string;
        reason?: string;
    };
    forced: boolean;
    forcedProperties?: Record<string, boolean>;
}
export interface Slave_ProcessDataValueObject {
    entries: Slave_ProcessDataValueObjectEntry[];
    index: string;
}
export interface SR_GetProcessDataValues {
    input: Slave_ProcessDataValueObject[];
    output: Slave_ProcessDataValueObject[];
}
export interface SR_Slave_HotConnect {
    isHotConnectSlave: boolean;
    isHotConnectHead: boolean;
    slaveCountActual: number;
    slaveCountConfig: number;
}
export interface SR_Slave_Identity {
    addrs: SlaveAddrs;
    name: string;
    type: string;
    product: number;
    productionInfo?: SR_Slave_ProductionInfo;
    revision: number;
    serial: number;
    vendor: SR_Slave_Vendor;
}
export interface SR_Slave_ProductionInfo {
    firmwareVersion: number;
    hardwareVersion: number;
    date?: SR_Slave_ProductionDate;
}
export interface SR_Slave_ProductionDate {
    year: number;
    calendarWeek: number;
    dayOfWeek: number;
}
export interface SR_Slave_Vendor {
    id: number;
    memberNameLong: string;
    memberNameShort: string;
}
export interface SR_Slave_Port {
    physAddr: number;
    autoIncAddr: number;
    physic: PortPhysic;
    configured: boolean;
    configuredSlave?: SR_Slave;
    redundancy?: boolean;
    redundancyPath?: boolean;
}
export interface SR_GetSlavesOnlineInfo {
    config: ConfigDetails;
    slaves: Record<string, SR_SlaveOnlineInfo>;
}
export interface SR_SlaveOnlineInfo {
    counter: {
        abnormalChanges: number;
        connectionLosses: number;
    };
    current: {
        disabled: boolean;
        identity: {
            isInvalid: boolean;
            isInvalidOnPrevSlaves: number;
        };
        initError: boolean;
        presence: {
            notPresent: boolean;
            notPresentOnPrevSlaves: number;
        };
        signalsError: boolean;
        stateMachine: number;
        stateMachineEx?: number;
    };
    requested: {
        stateMachine: 0;
    };
    ports: [SR_PortOnlineInfo, SR_PortOnlineInfo, SR_PortOnlineInfo, SR_PortOnlineInfo];
    syncUnits: Record<string, SR_SyncUnitOnlineInfo>;
}
export interface SR_PortOnlineInfo {
    counter: {
        crc: {
            errorOnPrevPort: false;
            total: 0;
        };
    };
    current: {
        linkError: boolean;
        missingLink: boolean;
        unexpectedLink: boolean;
    };
}
export interface SR_SyncUnitOnlineInfo {
    frameMissedCounter: number;
    wcFaultCounter: number;
    error: boolean;
}
