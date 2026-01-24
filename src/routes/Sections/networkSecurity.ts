import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/FullRoutes/NetworkSecurity/fundamentals";
import ACLs from "@/routes/Individual/FullRoutes/NetworkSecurity/acls";
import AccessControl from "@/routes/Individual/FullRoutes/NetworkSecurity/accessControl";
import Firewalls from "@/routes/Individual/FullRoutes/NetworkSecurity/firewalls";
import VPNAndTunneling from "@/routes/Individual/FullRoutes/NetworkSecurity/vpnAndTunneling";
import IDSAndIPS from "@/routes/Individual/FullRoutes/NetworkSecurity/idsAndIPS";
import NetworkControls from "@/routes/Individual/FullRoutes/NetworkSecurity/networkControls";
import SegmentZeroTrust from "@/routes/Individual/FullRoutes/NetworkSecurity/segmentZeroTrust";

const networkSecurity: RouteObject[] = [
  ...Fundamentals,
  ...ACLs,
  ...AccessControl,
  ...Firewalls,
  ...VPNAndTunneling,
  ...IDSAndIPS,
  ...NetworkControls,
  ...SegmentZeroTrust,
];

export default networkSecurity;