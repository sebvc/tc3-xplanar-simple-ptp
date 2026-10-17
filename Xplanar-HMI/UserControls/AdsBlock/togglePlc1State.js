// Keep these lines for a best effort IntelliSense in the editor.
// When this file is migrated to TypeScript in the future this line must be removed.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.7.23/runtimes/native1.12-tchmi/TcHmi.d.ts" />

function togglePlc1State() {
    // Function implementation goes here
    TcHmi.Server.writeSymbol(
        'ADS.AdsSyncReadStateReq',
        'PLC1',
        data => {

            // ADD THE CONSOLE.LOG HERE
            console.log(
                'PLC1 state response:',
                data.response.commands[0].readValue
            );



            // Check the read request for errors.
            if (
                data.error !== TcHmi.Errors.NONE ||
                !data.response ||
                data.response.error ||
                !data.response.commands ||
                data.response.commands[0].error
            ) {
                console.error('Failed to read PLC1 ADS state:', data);
                return;
            }

            const currentState = data.response.commands[0].readValue.AdsState;

            let targetState;

            if (currentState === 5) {
                targetState = 6; // RUN -> STOP
            } else if (currentState === 6) {
                targetState = 5; // STOP -> RUN
            } else {
                console.warn('Unexpected PLC1 ADS state:', currentState);
                return;
            }

            // Request the state transition.
            TcHmi.Server.writeSymbol(
                'ADS.AdsSyncWriteControlReq',
                {
                    AdsState: targetState,
                    DeviceState: 0,
                    Runtime: 'PLC1',
                    WriteData: ''
                },
                writeData => {
                    if (
                        writeData.error !== TcHmi.Errors.NONE ||
                        !writeData.response ||
                        writeData.response.error ||
                        !writeData.response.commands ||
                        writeData.response.commands[0].error
                    ) {
                        console.error(
                            'Failed to change PLC1 ADS state:',
                            writeData
                        );
                        return;
                    }

                    console.info(
                        'Requested PLC1 ADS state:',
                        targetState
                    );
                }
            );
        }
    );
}
TcHmi.Functions.registerFunctionEx(
  'togglePlc1State',
  'TcHmi.Functions.Xplanar_HMI',
  togglePlc1State,
);
