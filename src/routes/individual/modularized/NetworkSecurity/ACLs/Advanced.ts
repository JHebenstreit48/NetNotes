import { RouteObject } from "react-router-dom";

import ExtendedACLs from "@/routes/individual/modularized/NetworkSecurity/ACLs/Advanced/ExtendedACLs";
import ExamplesAndPatterns from "@/routes/individual/modularized/NetworkSecurity/ACLs/Advanced/ExamplesAndPatterns";
import VerifyAndTroubleshoot from "@/routes/individual/modularized/NetworkSecurity/ACLs/Advanced/VerifyAndTroubleshoot";

const Advanced: RouteObject[] = [
  ...ExtendedACLs,
  ...ExamplesAndPatterns,
  ...VerifyAndTroubleshoot,
];

export default Advanced;
