import { RouteObject } from "react-router-dom";

import VLANs from "@/routes/Individual/Granularized/RouteAndSwitch/Switching/Advanced/VLANs/VLANs";
import STP from "@/routes/Individual/Granularized/RouteAndSwitch/Switching/Advanced/STP";
import EtherChannel from "@/routes/Individual/Granularized/RouteAndSwitch/Switching/Advanced/EtherChannel";
import EdgeServices from "@/routes/Individual/Granularized/RouteAndSwitch/Switching/Advanced/EdgeServices";
import QoS from "@/routes/Individual/Granularized/RouteAndSwitch/Switching/Advanced/QoS";

const Advanced: RouteObject[] = [
    ...VLANs,
    ...STP,
    ...EtherChannel,
    ...EdgeServices,
    ...QoS
];

export default Advanced;