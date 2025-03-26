import { Subpage } from "@/Navigation/NavigationTypes";

const TroubleshootingACLs: Subpage = {
  name: "Verifying and Troubleshooting ACLs",
  subpages: [
    {
      name: "show access-lists",
      path: "/corenetworking/security/acls/troubleshooting/showaccesslists",
    },
    {
      name: "show run / interface",
      path: "/corenetworking/security/acls/troubleshooting/showruninterface",
    },
    {
      name: "ping and traceroute",
      path: "/corenetworking/security/acls/troubleshooting/pingtraceroute",
    },
    {
      name: "Common Mistakes",
      path: "/corenetworking/security/acls/troubleshooting/commonmistakes",
    },
  ],
};

export default TroubleshootingACLs;
