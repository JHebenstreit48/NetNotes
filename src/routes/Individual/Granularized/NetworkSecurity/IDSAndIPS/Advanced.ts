import { RouteObject } from "react-router-dom";

import DetectionEngines from "@/routes/Individual/Granularized/NetworkSecurity/IDSAndIPS/Advanced/DetectionEngines";
import EvasionAndResilience from "@/routes/Individual/Granularized/NetworkSecurity/IDSAndIPS/Advanced/EvasionAndResilience";

const Advanced: RouteObject[] = [
  ...DetectionEngines,
  ...EvasionAndResilience,
];

export default Advanced;
