import { RouteObject } from "react-router-dom";

import TransportClasses from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Advanced/TransportClasses";
import CLNSAndAddressing from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Advanced/CLNSAndAddressing";
import OSIRouting from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Advanced/OSIRouting";
import InterworkingAndMapping from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Advanced/InterworkingAndMapping";

const Advanced: RouteObject[] = [
  ...TransportClasses,
  ...CLNSAndAddressing,
  ...OSIRouting,
  ...InterworkingAndMapping,
];

export default Advanced;
