import { RouteObject } from "react-router-dom";

import SourceValidation from "@/routes/individual/modularized/NetworkSecurity/NetworkControls/Advanced/SourceValidation";
import Eight021XOverview from "@/routes/individual/modularized/NetworkSecurity/NetworkControls/Advanced/Eight021XOverview";

const Advanced: RouteObject[] = [
  ...SourceValidation,
  ...Eight021XOverview,
];

export default Advanced;