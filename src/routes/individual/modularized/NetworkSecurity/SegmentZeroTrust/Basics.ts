import { RouteObject } from "react-router-dom";

import Segmentation from "@/routes/individual/modularized/NetworkSecurity/SegmentZeroTrust/Basics/Segmentation";
import ZeroTrust from "@/routes/individual/modularized/NetworkSecurity/SegmentZeroTrust/Basics/ZeroTrust";

const Basics: RouteObject[] = [
  ...Segmentation,
  ...ZeroTrust,
];

export default Basics;
