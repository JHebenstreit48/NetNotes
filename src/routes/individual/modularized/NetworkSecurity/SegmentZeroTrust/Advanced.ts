import { RouteObject } from "react-router-dom";

import Microsegmentation from "@/routes/individual/modularized/NetworkSecurity/SegmentZeroTrust/Advanced/Microsegmentation";
import ZTNAPatterns from "@/routes/individual/modularized/NetworkSecurity/SegmentZeroTrust/Advanced/ZTNAPatterns";

const Advanced: RouteObject[] = [
  ...Microsegmentation,
  ...ZTNAPatterns,
];

export default Advanced;
