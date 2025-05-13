import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ApplicationLayer: Subpage = {
  name: "Application Layer",
  subpages: [
                { name: "Overview", path: "/corenetworking/tcpipmodel/applicationlayer/overview" },
                { name: "HTTP/HTTPS", path: "/corenetworking/tcpipmodel/applicationlayer/httphttps" },
                { name: "DNS", path: "/corenetworking/tcpipmodel/applicationlayer/dns" },
              ],
            };

export default ApplicationLayer;
