import { RouteObject } from "react-router-dom";

import DetectionConcepts from "@/routes/individual/modularized/NetworkSecurity/IDSAndIPS/Basics/DetectionConcepts";
import PlacementAndTuning from "@/routes/individual/modularized/NetworkSecurity/IDSAndIPS/Basics/PlacementAndTuning";

const Basics: RouteObject[] = [
  ...DetectionConcepts,
  ...PlacementAndTuning,
];

export default Basics;
