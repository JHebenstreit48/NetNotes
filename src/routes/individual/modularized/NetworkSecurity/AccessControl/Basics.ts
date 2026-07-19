import { RouteObject } from "react-router-dom";

import AAAAndRBAC from "@/routes/individual/modularized/NetworkSecurity/AccessControl/Basics/AAAAndRBAC";
import AccessContexts from "@/routes/individual/modularized/NetworkSecurity/AccessControl/Basics/AccessContexts";

const Basics: RouteObject[] = [
  ...AAAAndRBAC,
  ...AccessContexts,
];

export default Basics;
