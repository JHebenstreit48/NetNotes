import { RouteObject } from "react-router-dom";

import VLANs from "@/routes/Individual/Granularized/Networking/Switching/Advanced/VLANs";
import STP from "@/routes/Individual/Granularized/Networking/Switching/Advanced/STP";
import EtherChannel from "@/routes/Individual/Granularized/Networking/Switching/Advanced/EtherChannel";
import EdgeServices from "@/routes/Individual/Granularized/Networking/Switching/Advanced/EdgeServices";
import QoSEdge from "@/routes/Individual/Granularized/Networking/Switching/Advanced/QoS";

const Advanced: RouteObject[] = [
  ...VLANs,
  ...STP,
  ...EtherChannel,
  ...EdgeServices,
  ...QoSEdge,
];

export default Advanced;
