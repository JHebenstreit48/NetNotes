import { RouteObject } from "react-router-dom";

import CellularPerformance from "@/routes/Individual/Granularized/Networking/Mobile/Advanced/CellularPerformance";
import BluetoothTroubleshooting from "@/routes/Individual/Granularized/Networking/Mobile/Advanced/BluetoothTroubleshooting";
import NFCSecurity from "@/routes/Individual/Granularized/Networking/Mobile/Advanced/NFCSecurity";
import RadioCoexistence from "@/routes/Individual/Granularized/Networking/Mobile/Advanced/RadioCoexistence";

const Advanced: RouteObject[] = [
    ...CellularPerformance,
    ...BluetoothTroubleshooting,
    ...NFCSecurity,
    ...RadioCoexistence,
];

export default Advanced;