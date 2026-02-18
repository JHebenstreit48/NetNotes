import { Subpage } from "@/types/navigation";

import networking from "@/Navigation/Combined/Topics/networking";
import networkSecurity from "@/Navigation/Combined/Topics/networkSecurity";
import voip from "@/Navigation/Combined/Topics/voip";
import certifications from "@/Navigation/Combined/Topics/certifications";
import tools from "@/Navigation/Combined/Topics/tools";

const pages: Subpage[] = [
  networking,
  networkSecurity,
  voip,
  certifications,
  tools
];

export default pages;