import { RouteObject } from "react-router-dom";

import Layer2Protections from "@/routes/Individual/Granularized/NetworkSecurity/NetworkControls/Basics/Layer2Protections";
import IPv6FirstHop from "@/routes/Individual/Granularized/NetworkSecurity/NetworkControls/Basics/IPv6FirstHop";

const Basics: RouteObject[] = [
  ...Layer2Protections,
  ...IPv6FirstHop,
];

export default Basics;
