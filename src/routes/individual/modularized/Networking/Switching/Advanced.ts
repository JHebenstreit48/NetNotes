import { RouteObject } from "react-router-dom";

import VLANs from "@/routes/individual/modularized/Networking/Switching/Advanced/VLANs";
import STP from "@/routes/individual/modularized/Networking/Switching/Advanced/STP";
import EtherChannel from "@/routes/individual/modularized/Networking/Switching/Advanced/EtherChannel";
import EdgeServices from "@/routes/individual/modularized/Networking/Switching/Advanced/EdgeServices";
import QoSEdge from "@/routes/individual/modularized/Networking/Switching/Advanced/QoS";

const Advanced: RouteObject[] = [
  ...VLANs,
  ...STP,
  ...EtherChannel,
  ...EdgeServices,
  ...QoSEdge,
];

export default Advanced;
