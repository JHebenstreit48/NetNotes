import { RouteObject } from "react-router-dom";

import Microsegmentation from "@/routes/Individual/Granularized/NetworkSecurity/SegmentZeroTrust/Advanced/Microsegmentation";
import ZTNAPatterns from "@/routes/Individual/Granularized/NetworkSecurity/SegmentZeroTrust/Advanced/ZTNAPatterns";

const Advanced: RouteObject[] = [
  ...Microsegmentation,
  ...ZTNAPatterns,
];

export default Advanced;
