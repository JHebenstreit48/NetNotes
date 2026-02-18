import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Networking/Mobile/Basics/Fundamentals";
import Cellular from "@/routes/Individual/Granularized/Networking/Mobile/Basics/Cellular";
import Bluetooth from "@/routes/Individual/Granularized/Networking/Mobile/Basics/Bluetooth";
import NFC from "@/routes/Individual/Granularized/Networking/Mobile/Basics/NFC";
import Location from "@/routes/Individual/Granularized/Networking/Mobile/Basics/Location";
import Tethering from "@/routes/Individual/Granularized/Networking/Mobile/Basics/Tethering";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...Cellular,
    ...Bluetooth,
    ...NFC,
    ...Location,
    ...Tethering
];

export default Basics;