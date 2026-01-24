import { RouteObject } from "react-router-dom";

import Segmentation from "@/routes/Individual/Granularized/NetworkSecurity/SegmentZeroTrust/Basics/Segmentation";
import ZeroTrust from "@/routes/Individual/Granularized/NetworkSecurity/SegmentZeroTrust/Basics/ZeroTrust";

const Basics: RouteObject[] = [
  ...Segmentation,
  ...ZeroTrust,
];

export default Basics;
