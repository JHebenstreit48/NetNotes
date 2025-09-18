import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Web & Name Resolution",
      subpages: [
        {
          name: "Introduction",
          path: "/tcpip-model/application-layer/web-name/introduction"
        },
        {
          name: "HTTP/HTTPS",
          path: "/tcpip-model/application-layer/web-name/httphttps"
        },
        {
          name: "DNS",
          path: "/tcpip-model/application-layer/web-name/dns"
        }
      ]
    },
    {
      name: "Client/Server Concepts",
      subpages: [
        {
          name: "Introduction",
          path: "/tcpip-model/application-layer/client-server/introduction"
        },
        {
          name: "Client/Server Roles",
          path: "/tcpip-model/application-layer/client-server/clientvsserver"
        },
        {
          name: "P2P vs. Client/Server",
          path: "/tcpip-model/application-layer/client-server/p2pvsclientserver"
        },
        {
          name: "Examples",
          path: "/tcpip-model/application-layer/client-server/examples"
        }
      ]
    },
    {
      name: "Email & Communication",
      subpages: [
        {
          name: "SMTP",
          path: "/tcpip-model/application-layer/email-comm/smtp"
        },
        {
          name: "IMAP",
          path: "/tcpip-model/application-layer/email-comm/imap"
        }
      ]
    }
  ]
};

export default Basics;