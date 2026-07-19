import { RouteObject } from "react-router-dom";

import Architecture from "@/routes/individual/modularized/Networking/Cloud/Advanced/Architecture";
import HAAndScale from "@/routes/individual/modularized/Networking/Cloud/Advanced/HAAndScale";
import AutomationAndAPIs from "@/routes/individual/modularized/Networking/Cloud/Advanced/AutomationAndAPIs";
import Troubleshooting from "@/routes/individual/modularized/Networking/Cloud/Advanced/Troubleshooting";

const Advanced: RouteObject[] = [
  ...Architecture,
  ...HAAndScale,
  ...AutomationAndAPIs,
  ...Troubleshooting,
];

export default Advanced;
