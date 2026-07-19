import { RouteObject } from "react-router-dom";

import OSIModel from "@/routes/individual/modularized/Networking/Legacy/OSIModel";
import ProtocolsAndStatuses from "@/routes/individual/modularized/Networking/Legacy/ProtocolsAndStatuses";

const Legacy: RouteObject[] = [
  ...OSIModel,
  ...ProtocolsAndStatuses,
];
export default Legacy;
