import { RouteObject } from "react-router-dom";

import AAAAndRBAC from "@/routes/Individual/Granularized/NetworkSecurity/AccessControl/Basics/AAAAndRBAC";
import AccessContexts from "@/routes/Individual/Granularized/NetworkSecurity/AccessControl/Basics/AccessContexts";

const Basics: RouteObject[] = [
  ...AAAAndRBAC,
  ...AccessContexts,
];

export default Basics;
