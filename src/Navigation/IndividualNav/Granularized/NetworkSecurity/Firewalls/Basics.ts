import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Stateful & NAT",
      subpages: [
        {
          name: "Stateful Inspection",
          path: "/firewalls/basics/stateful-inspection"
        },
        {
          name: "NAT Fundamentals",
          path: "/firewalls/basics/nat-fundamentals"
        }
      ]
    },
    {
      name: "ZBFW Concepts",
      subpages: [
        {
          name: "Zones & Zone-Pairs",
          path: "/firewalls/basics/zbfw/zones-and-zone-pairs"
        },
        {
          name: "Class-Maps & Policy-Maps",
          path: "/firewalls/basics/zbfw/classmaps-policymaps"
        }
      ]
    }
  ]
};

export default Basics;