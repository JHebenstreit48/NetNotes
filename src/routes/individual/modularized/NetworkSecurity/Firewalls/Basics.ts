import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/NetworkSecurity/Firewalls/Basics/Fundamentals';
import StatefulAndNAT from "@/routes/individual/modularized/NetworkSecurity/Firewalls/Basics/StatefulAndNAT";
import ZBFWConcepts from "@/routes/individual/modularized/NetworkSecurity/Firewalls/Basics/ZBFWConcepts";
import OPNsense from "@/routes/individual/modularized/NetworkSecurity/Firewalls/Basics/OPNsense";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...StatefulAndNAT,
  ...ZBFWConcepts,
  ...OPNsense,
];

export default Basics;