import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import certificationsNav from "@/Navigation/CombinedNav/CombinedTopics/certifications";
import examPrepNav from "@/Navigation/CombinedNav/CombinedTopics/examPrep";
import routeSwitch from "@/Navigation/CombinedNav/CombinedTopics/routeAndSwitch";
import networkSecurity from "@/Navigation/CombinedNav/CombinedTopics/networkSecurity";
import voip from "@/Navigation/CombinedNav/CombinedTopics/voip";
import toolsNav from "@/Navigation/CombinedNav/CombinedTopics/tools";


const pages: Subpage[] = [
  certificationsNav,
  examPrepNav,
  routeSwitch,
  networkSecurity,
  voip,
  toolsNav
];

export default pages;