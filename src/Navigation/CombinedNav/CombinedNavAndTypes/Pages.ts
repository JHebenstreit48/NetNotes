import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import certifications from "@/Navigation/CombinedNav/CombinedTopics/certifications";
import examPrep from "@/Navigation/CombinedNav/CombinedTopics/examPrep";
import routeSwitch from "@/Navigation/CombinedNav/CombinedTopics/routeAndSwitch";
import networkSecurity from "@/Navigation/CombinedNav/CombinedTopics/networkSecurity";
import voip from "@/Navigation/CombinedNav/CombinedTopics/voip";
import tools from "@/Navigation/CombinedNav/CombinedTopics/tools";


const pages: Subpage[] = [
  certifications,
  examPrep,
  routeSwitch,
  networkSecurity,
  voip,
  tools
];

export default pages;