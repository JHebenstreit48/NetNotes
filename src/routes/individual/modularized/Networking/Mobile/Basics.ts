import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/individual/modularized/Networking/Mobile/Basics/Fundamentals";
import Cellular from "@/routes/individual/modularized/Networking/Mobile/Basics/Cellular";
import Bluetooth from "@/routes/individual/modularized/Networking/Mobile/Basics/Bluetooth";
import NFC from "@/routes/individual/modularized/Networking/Mobile/Basics/NFC";
import Location from "@/routes/individual/modularized/Networking/Mobile/Basics/Location";
import Tethering from "@/routes/individual/modularized/Networking/Mobile/Basics/Tethering";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...Cellular,
    ...Bluetooth,
    ...NFC,
    ...Location,
    ...Tethering
];

export default Basics;