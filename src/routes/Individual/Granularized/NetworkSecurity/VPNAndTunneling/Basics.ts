import { RouteObject } from "react-router-dom";

import SiteToSite from "@/routes/Individual/Granularized/NetworkSecurity/VPNAndTunneling/Basics/SiteToSite";
import RemoteAccess from "@/routes/Individual/Granularized/NetworkSecurity/VPNAndTunneling/Basics/RemoteAccess";

const Basics: RouteObject[] = [
  ...SiteToSite,
  ...RemoteAccess,
];

export default Basics;
