import { RouteObject } from "react-router-dom";

import SourceValidation from "@/routes/Individual/Granularized/NetworkSecurity/NetworkControls/Advanced/SourceValidation";
import Eight021XOverview from "@/routes/Individual/Granularized/NetworkSecurity/NetworkControls/Advanced/Eight021XOverview";

const Advanced: RouteObject[] = [
  ...SourceValidation,
  ...Eight021XOverview,
];

export default Advanced;