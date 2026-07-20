import { RouteObject } from "react-router-dom";

import DMVPN from "@/routes/individual/modularized/NetworkSecurity/VPNAndTunneling/Advanced/DMVPN";
import SSLVPN from "@/routes/individual/modularized/NetworkSecurity/VPNAndTunneling/Advanced/SSLVPN";

const Advanced: RouteObject[] = [
  ...DMVPN,
  ...SSLVPN,
];

export default Advanced;
