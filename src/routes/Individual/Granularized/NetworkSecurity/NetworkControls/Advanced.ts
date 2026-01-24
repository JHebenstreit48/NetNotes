import { RouteObject } from "react-router-dom";

import SourceValidation from "@/routes/Individual/Granularized/NetworkSecurity/NetworkControls/Advanced/SourceValidation";
import 8021XOverview from "@/routes/Individual/Granularized/NetworkSecurity/NetworkControls/Advanced/8021XOverview";

const Advanced: RouteObject[] = [
  ...SourceValidation,
  ...8021XOverview,
];

export default Advanced;
