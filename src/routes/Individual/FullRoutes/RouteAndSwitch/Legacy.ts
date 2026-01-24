import { RouteObject } from "react-router-dom";

import OSIModel from "@/routes/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel";
import ProtocolsAndStatuses from "@/routes/Individual/Granularized/RouteAndSwitch/Legacy/ProtocolsAndStatuses";

const Legacy: RouteObject[] = [
  ...OSIModel,
  ...ProtocolsAndStatuses,
];
export default Legacy;
