import { Subpage } from "@/types/navigation";

import networking from "@/navigation/combined/topics/networking";
import networkSecurity from "@/navigation/combined/topics/networkSecurity";
import voip from "@/navigation/combined/topics/voip";
import certifications from "@/navigation/combined/topics/certifications";
import tools from "@/navigation/combined/topics/tools";
import glossary from "@/navigation/combined/topics/glossary";

const pages: Subpage[] = [
  networking,
  networkSecurity,
  voip,
  certifications,
  tools,
  glossary
];

export default pages;