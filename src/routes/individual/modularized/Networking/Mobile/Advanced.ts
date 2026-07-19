import { RouteObject } from "react-router-dom";

import CellularPerformance from "@/routes/individual/modularized/Networking/Mobile/Advanced/CellularPerformance";
import BluetoothTroubleshooting from "@/routes/individual/modularized/Networking/Mobile/Advanced/BluetoothTroubleshooting";
import NFCSecurity from "@/routes/individual/modularized/Networking/Mobile/Advanced/NFCSecurity";
import RadioCoexistence from "@/routes/individual/modularized/Networking/Mobile/Advanced/RadioCoexistence";

const Advanced: RouteObject[] = [
    ...CellularPerformance,
    ...BluetoothTroubleshooting,
    ...NFCSecurity,
    ...RadioCoexistence,
];

export default Advanced;