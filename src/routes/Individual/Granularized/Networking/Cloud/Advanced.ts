import { RouteObject } from "react-router-dom";

import Architecture from "@/routes/Individual/Granularized/Networking/Cloud/Advanced/Architecture";
import HAAndScale from "@/routes/Individual/Granularized/Networking/Cloud/Advanced/HAAndScale";
import AutomationAndAPIs from "@/routes/Individual/Granularized/Networking/Cloud/Advanced/AutomationAndAPIs";
import Troubleshooting from "@/routes/Individual/Granularized/Networking/Cloud/Advanced/Troubleshooting";

const Advanced: RouteObject[] = [
  ...Architecture,
  ...HAAndScale,
  ...AutomationAndAPIs,
  ...Troubleshooting,
];

export default Advanced;
