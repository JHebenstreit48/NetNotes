import { RouteObject } from "react-router-dom";

import DetectionEngines from "@/routes/individual/modularized/NetworkSecurity/IDSAndIPS/Advanced/DetectionEngines";
import EvasionAndResilience from "@/routes/individual/modularized/NetworkSecurity/IDSAndIPS/Advanced/EvasionAndResilience";

const Advanced: RouteObject[] = [
  ...DetectionEngines,
  ...EvasionAndResilience,
];

export default Advanced;
