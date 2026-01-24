import { RouteObject } from "react-router-dom";

import ExtendedACLs from "@/routes/Individual/Granularized/NetworkSecurity/ACLs/Advanced/ExtendedACLs";
import ExamplesAndPatterns from "@/routes/Individual/Granularized/NetworkSecurity/ACLs/Advanced/ExamplesAndPatterns";
import VerifyAndTroubleshoot from "@/routes/Individual/Granularized/NetworkSecurity/ACLs/Advanced/VerifyAndTroubleshoot";

const Advanced: RouteObject[] = [
  ...ExtendedACLs,
  ...ExamplesAndPatterns,
  ...VerifyAndTroubleshoot,
];

export default Advanced;
