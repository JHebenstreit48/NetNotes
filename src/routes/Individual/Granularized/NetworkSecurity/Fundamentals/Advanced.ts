import { RouteObject } from "react-router-dom";

import SecurityModels from "@/routes/Individual/Granularized/NetworkSecurity/Fundamentals/Advanced/SecurityModels";
import RiskAndPolicy from "@/routes/Individual/Granularized/NetworkSecurity/Fundamentals/Advanced/RiskAndPolicy";

const Advanced: RouteObject[] = [
  ...SecurityModels,
  ...RiskAndPolicy,
];

export default Advanced;
