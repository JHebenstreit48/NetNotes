import { RouteObject } from "react-router-dom";

import DetectionConcepts from "@/routes/Individual/Granularized/NetworkSecurity/IDSAndIPS/Basics/DetectionConcepts";
import PlacementAndTuning from "@/routes/Individual/Granularized/NetworkSecurity/IDSAndIPS/Basics/PlacementAndTuning";

const Basics: RouteObject[] = [
  ...DetectionConcepts,
  ...PlacementAndTuning,
];

export default Basics;
