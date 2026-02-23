import { Subpage } from "@/types/navigation";

import networking from "@/navigation/Combined/Topics/networking";
import networkSecurity from "@/navigation/Combined/Topics/networkSecurity";
import voip from "@/navigation/Combined/Topics/voip";
import certifications from "@/navigation/Combined/Topics/certifications";
import tools from "@/navigation/Combined/Topics/tools";
import glossary from "@/navigation/Combined/Topics/glossary";

const pages: Subpage[] = [
  networking,
  networkSecurity,
  voip,
  certifications,
  tools,
  glossary
];

export default pages;