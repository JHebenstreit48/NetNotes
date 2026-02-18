import { RouteObject } from "react-router-dom";

import Concepts from "@/routes/Individual/Granularized/Networking/Switching/Advanced/VLANs/Concepts";
import Operations from "@/routes/Individual/Granularized/Networking/Switching/Advanced/VLANs/Operations";
import Routing from "@/routes/Individual/Granularized/Networking/Switching/Advanced/VLANs/Routing";
import SecurityAndDesign from "@/routes/Individual/Granularized/Networking/Switching/Advanced/VLANs/SecurityAndDesign";

const VLANs: RouteObject[] = [
  ...Concepts,
  ...Operations,
  ...Routing,
  ...SecurityAndDesign,
];

export default VLANs;
