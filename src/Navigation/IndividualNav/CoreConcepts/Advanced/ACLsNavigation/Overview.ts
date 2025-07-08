import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ACLsOverview: Subpage = {
  name: "ACLs Overview",
  subpages: [
    {
      name: "Fundamentals",
      path: "/corenetworking/security/acls/overview/fundamentals"
    },
    {
      name: "Use Cases",
      path: "/corenetworking/security/acls/overview/usecases"
    },
    {
      name: "Processing and Rules",
      path: "/corenetworking/security/acls/overview/processing"
    },
    {
      name: "Named vs Numbered",
      path: "/corenetworking/security/acls/overview/namedvsnumbered"
    },
  ],
};

export default ACLsOverview;
