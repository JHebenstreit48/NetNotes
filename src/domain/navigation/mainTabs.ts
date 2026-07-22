import { Subpage } from "@/types/navigation";

import networking from "@/navigation/combined/Topics/networking";
import networkSecurity from "@/navigation/combined/Topics/networkSecurity";
import voip from "@/navigation/combined/Topics/voip";
import certifications from "@/navigation/combined/Topics/certifications";
import tools from "@/navigation/combined/Topics/tools";
import glossary from "@/navigation/combined/Topics/glossary";

const pages: Subpage[] = [
  networking,
  networkSecurity,
  voip,
  certifications,
  tools,
  glossary
];

export default pages;