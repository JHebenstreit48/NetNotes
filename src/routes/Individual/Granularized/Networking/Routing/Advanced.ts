import { RouteObject } from "react-router-dom";

import StaticRouting from "@/routes/Individual/Granularized/Networking/Routing/Advanced/StaticRouting";
import DynamicRouting from "@/routes/Individual/Granularized/Networking/Routing/Advanced/DynamicRouting";
import IGPs from "@/routes/Individual/Granularized/Networking/Routing/Advanced/IGPs";
import EGPs from "@/routes/Individual/Granularized/Networking/Routing/Advanced/EGPs";

const Advanced: RouteObject[] = [
  ...StaticRouting,
  ...DynamicRouting,
  ...IGPs,
  ...EGPs,
];

export default Advanced;
