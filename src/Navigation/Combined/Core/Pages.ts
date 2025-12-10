import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import certifications from "@/Navigation/Combined/Topics/certifications";
import routeSwitch from "@/Navigation/Combined/Topics/routeAndSwitch";
import networkSecurity from "@/Navigation/Combined/Topics/networkSecurity";
import voip from "@/Navigation/Combined/Topics/voip";
import tools from "@/Navigation/Combined/Topics/tools";


const pages: Subpage[] = [
  routeSwitch,
  networkSecurity,
  voip,
  certifications,
  tools
];

export default pages;