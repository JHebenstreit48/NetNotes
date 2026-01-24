import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/NetworkSecurity/SegmentZeroTrust/Basics";
import Advanced from "@/routes/Individual/Granularized/NetworkSecurity/SegmentZeroTrust/Advanced";

const SegmentZeroTrust: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default SegmentZeroTrust;
