import { RouteObject } from "react-router-dom";

import SiteToSite from "@/routes/individual/modularized/NetworkSecurity/VPNAndTunneling/Basics/SiteToSite";
import RemoteAccess from "@/routes/individual/modularized/NetworkSecurity/VPNAndTunneling/Basics/RemoteAccess";

const Basics: RouteObject[] = [
  ...SiteToSite,
  ...RemoteAccess,
];

export default Basics;
