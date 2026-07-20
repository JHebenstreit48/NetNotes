import { RouteObject } from "react-router-dom";

import StaticRouting from "@/routes/individual/modularized/Networking/Routing/Advanced/StaticRouting";
import DynamicRouting from "@/routes/individual/modularized/Networking/Routing/Advanced/DynamicRouting";
import IGPs from "@/routes/individual/modularized/Networking/Routing/Advanced/IGPs";
import EGPs from "@/routes/individual/modularized/Networking/Routing/Advanced/EGPs";

const Advanced: RouteObject[] = [
  ...StaticRouting,
  ...DynamicRouting,
  ...IGPs,
  ...EGPs,
];

export default Advanced;
