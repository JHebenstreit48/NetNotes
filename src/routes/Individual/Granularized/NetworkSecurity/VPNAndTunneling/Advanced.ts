import { RouteObject } from "react-router-dom";

import DMVPN from "@/routes/Individual/Granularized/NetworkSecurity/VPNAndTunneling/Advanced/DMVPN";
import SSLVPN from "@/routes/Individual/Granularized/NetworkSecurity/VPNAndTunneling/Advanced/SSLVPN";

const Advanced: RouteObject[] = [
  ...DMVPN,
  ...SSLVPN,
];

export default Advanced;
