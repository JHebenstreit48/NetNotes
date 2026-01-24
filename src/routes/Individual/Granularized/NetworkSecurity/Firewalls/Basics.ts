import { RouteObject } from "react-router-dom";

import StatefulAndNAT from "@/routes/Individual/Granularized/NetworkSecurity/Firewalls/Basics/StatefulAndNAT";
import ZBFWConcepts from "@/routes/Individual/Granularized/NetworkSecurity/Firewalls/Basics/ZBFWConcepts";
import OPNsense from "@/routes/Individual/Granularized/NetworkSecurity/Firewalls/Basics/OPNsense";

const Basics: RouteObject[] = [
  ...StatefulAndNAT,
  ...ZBFWConcepts,
  ...OPNsense,
];

export default Basics;
