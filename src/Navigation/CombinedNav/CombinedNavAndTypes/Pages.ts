import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import certificationsNav from "@/Navigation/CombinedNav/CombinedTopics/certificationsCombined";
import examPrepNav from "@/Navigation/CombinedNav/CombinedTopics/examPrepCombined";
import toolsNav from "@/Navigation/CombinedNav/CombinedTopics/toolsCombined";
import CoreConcepts from "@/Navigation/CombinedNav/CombinedTopics/coreConcepts";

const pages: Subpage[] = [
  {
    name: 'Home',
    subpages: [],
  },
  certificationsNav,
  examPrepNav,
  CoreConcepts,
  toolsNav
];

export default pages;