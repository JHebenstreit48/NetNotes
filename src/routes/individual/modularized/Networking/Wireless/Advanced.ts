import { RouteObject } from "react-router-dom";

import RFAndPerformance from "@/routes/individual/modularized/Networking/Wireless/Advanced/RFAndPerformance";
import Roaming from "@/routes/individual/modularized/Networking/Wireless/Advanced/Roaming";
import QoSAndServices from "@/routes/individual/modularized/Networking/Wireless/Advanced/QoSAndServices";
import ControllerOps from "@/routes/individual/modularized/Networking/Wireless/Advanced/ControllerOps";

const Advanced: RouteObject[] = [
  ...RFAndPerformance,
  ...Roaming,
  ...QoSAndServices,
  ...ControllerOps,
];

export default Advanced;
