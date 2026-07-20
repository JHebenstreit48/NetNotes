import { RouteObject } from "react-router-dom";

import Overview from "@/routes/individual/modularized/NetworkSecurity/ACLs/Basics/Overview";
import StandardACLs from "@/routes/individual/modularized/NetworkSecurity/ACLs/Basics/StandardACLs";
import WildcardMasks from "@/routes/individual/modularized/NetworkSecurity/ACLs/Basics/WildcardMasks";

const Basics: RouteObject[] = [
  ...Overview,
  ...StandardACLs,
  ...WildcardMasks,
];

export default Basics;
