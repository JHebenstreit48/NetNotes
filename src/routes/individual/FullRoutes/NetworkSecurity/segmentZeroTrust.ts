import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/NetworkSecurity/SegmentZeroTrust/Basics";
import Advanced from "@/routes/individual/modularized/NetworkSecurity/SegmentZeroTrust/Advanced";

const SegmentZeroTrust: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default SegmentZeroTrust;
