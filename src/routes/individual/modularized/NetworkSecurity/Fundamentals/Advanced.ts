import { RouteObject } from "react-router-dom";

import SecurityModels from "@/routes/individual/modularized/NetworkSecurity/Fundamentals/Advanced/SecurityModels";
import RiskAndPolicy from "@/routes/individual/modularized/NetworkSecurity/Fundamentals/Advanced/RiskAndPolicy";

const Advanced: RouteObject[] = [
  ...SecurityModels,
  ...RiskAndPolicy,
];

export default Advanced;
