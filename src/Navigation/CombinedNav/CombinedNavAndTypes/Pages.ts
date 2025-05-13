import { Page } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import certificationsNav from "@/Navigation/CombinedNav/CombinedNavTopics/certificationsCombined";
import examPrepNav from "@/Navigation/CombinedNav/CombinedNavTopics/examPrepCombined";
import toolsNav from "@/Navigation/CombinedNav/CombinedNavTopics/toolsCombined";
import coreNetworkingNav from "@/Navigation/CombinedNav/CombinedNavTopics/coreNetworkingCombined";

const pages: Page[] = [
  {
    name: 'Home',
    subpages: [],
  },
  certificationsNav,
  examPrepNav,
  toolsNav,
  coreNetworkingNav
];

export default pages;