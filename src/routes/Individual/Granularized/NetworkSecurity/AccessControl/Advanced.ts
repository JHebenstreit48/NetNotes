import { RouteObject } from "react-router-dom";

import ISENPS from "@/routes/Individual/Granularized/NetworkSecurity/AccessControl/Advanced/ISENPS";
import BestPractices from "@/routes/Individual/Granularized/NetworkSecurity/AccessControl/Advanced/BestPractices";

const Advanced: RouteObject[] = [
  ...ISENPS,
  ...BestPractices,
];

export default Advanced;
