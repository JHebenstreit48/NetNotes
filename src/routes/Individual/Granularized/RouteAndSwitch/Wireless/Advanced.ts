import { RouteObject } from "react-router-dom";

import RFAndPerformance from "@/routes/Individual/Granularized/RouteAndSwitch/Wireless/Advanced/RFAndPerformance";
import Roaming from "@/routes/Individual/Granularized/RouteAndSwitch/Wireless/Advanced/Roaming";
import QoSAndServices from "@/routes/Individual/Granularized/RouteAndSwitch/Wireless/Advanced/QoSAndServices";
import ControllerOps from "@/routes/Individual/Granularized/RouteAndSwitch/Wireless/Advanced/ControllerOps";

const Advanced: RouteObject[] = [
  ...RFAndPerformance,
  ...Roaming,
  ...QoSAndServices,
  ...ControllerOps,
];

export default Advanced;
