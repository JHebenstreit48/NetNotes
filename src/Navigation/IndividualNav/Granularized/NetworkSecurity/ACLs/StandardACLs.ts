import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const StandardACLs: Subpage = {
  name: "Standard ACLs",
  subpages: [
    {
      name: "Standard ACL Basics",
      path: "/corenetworking/security/acls/standard/basics",
    },
    {
      name: "Standard ACL Syntax",
      path: "/corenetworking/security/acls/standard/syntax",
    },
    {
      name: "Standard ACL Placement",
      path: "/corenetworking/security/acls/standard/placement",
    },
  ],
};

export default StandardACLs;
