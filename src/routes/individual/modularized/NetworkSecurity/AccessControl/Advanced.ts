import { RouteObject } from "react-router-dom";

import ISENPS from "@/routes/individual/modularized/NetworkSecurity/AccessControl/Advanced/ISENPS";
import BestPractices from "@/routes/individual/modularized/NetworkSecurity/AccessControl/Advanced/BestPractices";

const Advanced: RouteObject[] = [
  ...ISENPS,
  ...BestPractices,
];

export default Advanced;
