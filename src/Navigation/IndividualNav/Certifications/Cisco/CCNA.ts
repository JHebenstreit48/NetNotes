import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const CCNANavigation: Subpage = {
  name: "CCNA",
  subpages: [
    {
      name: "Overview",
      subpages: [
        {
          name: "What is the CCNA?",
          path: "/certifications/ccna/overview"
        },
        {
          name: "Why Get CCNA Certified?",
          path: "/certifications/ccna/why-certify"
        }
      ]
    },
    {
      name: "Exam Topics",
      subpages: [
        {
          name: "Network Fundamentals",
          path: "/certifications/ccna/topics/network-fundamentals"
        },
        {
          name: "IP Connectivity",
          path: "/certifications/ccna/topics/ip-connectivity"
        },
        {
          name: "Network Security",
          path: "/certifications/ccna/topics/network-security"
        }
      ]
    },
    {
      name: "Study Resources",
      subpages: [
        {
          name: "Official Study Materials",
          path: "/certifications/ccna/resources/official"
        },
        {
          name: "Practice Labs",
          path: "/certifications/ccna/resources/labs"
        }
      ]
    }
  ]
};

export default CCNANavigation;
