import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const DevNetNavigation: Subpage = {
  name: "DevNet",
  subpages: [
    {
      name: "DevNet Associate (200-901)",
      subpages: [
        {
          name: "Overview",
          path: "/certifications/devops/devnet/associate/overview"
        },
        {
          name: "Exam Domains",
          path: "/certifications/devops/devnet/associate/domains"
        }
      ]
    },
    {
      name: "DevNet Professional",
      subpages: [
        {
          name: "Overview",
          path: "/certifications/devops/devnet/professional/overview"
        }
      ]
    },
    {
      name: "DevNet Expert",
      subpages: [
        {
          name: "Overview",
          path: "/certifications/devops/devnet/expert/overview"
        }
      ]
    }
  ]
};

export default DevNetNavigation;
