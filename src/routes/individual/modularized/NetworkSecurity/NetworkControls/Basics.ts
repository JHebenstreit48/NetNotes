import { RouteObject } from "react-router-dom";

import Layer2Protections from "@/routes/individual/modularized/NetworkSecurity/NetworkControls/Basics/Layer2Protections";
import IPv6FirstHop from "@/routes/individual/modularized/NetworkSecurity/NetworkControls/Basics/IPv6FirstHop";

const Basics: RouteObject[] = [
  ...Layer2Protections,
  ...IPv6FirstHop,
];

export default Basics;
