import { RouteObject } from "react-router-dom";

import Fundamentals from "@routes/individual/FullRoutes/NetworkSecurity/fundamentals";
import ACLs from "@routes/individual/FullRoutes/NetworkSecurity/acls";
import AccessControl from "@routes/individual/FullRoutes/NetworkSecurity/accessControl";
import Firewalls from "@routes/individual/FullRoutes/NetworkSecurity/firewalls";
import VPNAndTunneling from "@routes/individual/FullRoutes/NetworkSecurity/vpnAndTunneling";
import IDSAndIPS from "@routes/individual/FullRoutes/NetworkSecurity/idsAndIPS";
import NetworkControls from "@routes/individual/FullRoutes/NetworkSecurity/networkControls";
import SegmentZeroTrust from "@routes/individual/FullRoutes/NetworkSecurity/segmentZeroTrust";

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