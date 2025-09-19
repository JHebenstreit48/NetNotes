import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Web & Name Resolution",
      subpages: [
        {
          name: "Introduction",
          path: "/tcpip-model/layers/application/basics/web-and-name/introduction"
        },
        {
          name: "HTTP/HTTPS",
          path: "/tcpip-model/layers/application/basics/web-and-name/http-https"
        },
        {
          name: "DNS",
          path: "/tcpip-model/layers/application/basics/web-and-name/dns"
        }
      ]
    },
    {
      name: "Client/Server Concepts",
      subpages: [
        {
          name: "Introduction",
          path: "/tcpip-model/layers/application/basics/client-server/introduction"
        },
        {
          name: "Client/Server Roles",
          path: "/tcpip-model/layers/application/basics/client-server/client-vs-server"
        },
        {
          name: "P2P vs. Client/Server",
          path: "/tcpip-model/layers/application/basics/client-server/p2p-vs-client-server"
        },
        {
          name: "Examples",
          path: "/tcpip-model/layers/application/basics/client-server/examples"
        }
      ]
    },
    {
      name: "Email & Communication",
      subpages: [
        {
          name: "SMTP",
          path: "/tcpip-model/layers/application/basics/email-and-communication/smtp"
        },
        {
          name: "IMAP",
          path: "/tcpip-model/layers/application/basics/email-and-communication/imap"
        }
      ]
    }
  ]
};

export default Basics;