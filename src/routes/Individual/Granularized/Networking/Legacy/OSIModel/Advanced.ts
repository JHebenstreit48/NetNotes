import { RouteObject } from "react-router-dom";

import TransportClasses from "@/routes/Individual/Granularized/Networking/Legacy/OSIModel/Advanced/TransportClasses";
import CLNSAndAddressing from "@/routes/Individual/Granularized/Networking/Legacy/OSIModel/Advanced/CLNSAndAddressing";
import OSIRouting from "@/routes/Individual/Granularized/Networking/Legacy/OSIModel/Advanced/OSIRouting";
import InterworkingAndMapping from "@/routes/Individual/Granularized/Networking/Legacy/OSIModel/Advanced/InterworkingAndMapping";

const Advanced: RouteObject[] = [
  ...TransportClasses,
  ...CLNSAndAddressing,
  ...OSIRouting,
  ...InterworkingAndMapping,
];

export default Advanced;
