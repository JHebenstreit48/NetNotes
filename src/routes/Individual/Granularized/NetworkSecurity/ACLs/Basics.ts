import { RouteObject } from "react-router-dom";

import Overview from "@/routes/Individual/Granularized/NetworkSecurity/ACLs/Basics/Overview";
import StandardACLs from "@/routes/Individual/Granularized/NetworkSecurity/ACLs/Basics/StandardACLs";
import WildcardMasks from "@/routes/Individual/Granularized/NetworkSecurity/ACLs/Basics/WildcardMasks";

const Basics: RouteObject[] = [
  ...Overview,
  ...StandardACLs,
  ...WildcardMasks,
];

export default Basics;
