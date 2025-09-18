import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Network Services",
      subpages: [
        {
          name: "DHCP",
          path: "/tcpip-model/application-layer/network-services/dhcp"
        },
        {
          name: "NTP",
          path: "/tcpip-model/application-layer/network-services/ntp"
        },
        {
          name: "SNMP",
          path: "/tcpip-model/application-layer/network-services/snmp"
        },
        {
          name: "FTP/SFTP",
          path: "/tcpip-model/application-layer/network-services/ftp"
        }
      ]
    },
    {
      name: "Remote Access",
      subpages: [
        {
          name: "SSH",
          path: "/tcpip-model/application-layer/remote-access/ssh"
        },
        {
          name: "Best Practices",
          path: "/tcpip-model/application-layer/remote-access/ssh-best-practices"
        }
      ]
    },
    {
      name: "User Data & Privacy",
      subpages: [
        {
          name: "Data Collection Types",
          path: "/tcpip-model/application-layer/user-data/datacollectiontypes"
        },
        {
          name: "Privacy in Application Protocols",
          path: "/tcpip-model/application-layer/user-data/privacyinprotocols"
        }
      ]
    }
  ]
};

export default Advanced;