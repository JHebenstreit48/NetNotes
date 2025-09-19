import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ProtocolsAndStatuses: Subpage = {
  name: "Protocols & Statuses",
  subpages: [
    {
      name: "Remote Access (Legacy)",
      subpages: [
        {
          name: "Telnet",
          path: "/legacy/protocols-and-statuses/remote-access-legacy/telnet"
        },
        {
          name: "Migration to SSH",
          path: "/legacy/protocols-and-statuses/remote-access-legacy/migration-to-ssh"
        }
      ]
    },
    {
      name: "Email (Legacy/Compat)",
      subpages: [
        {
          name: "POP3",
          path: "/legacy/protocols-and-statuses/email-legacy/pop3"
        },
        {
          name: "POP3 vs IMAP",
          path: "/legacy/protocols-and-statuses/email-legacy/pop3-vs-imap"
        }
      ]
    },
    {
      name: "Routing Protocols (Legacy)",
      subpages: [
        {
          name: "RIP (Routing Information Protocol)",
          path: "/legacy/protocols-and-statuses/routing-protocols-legacy/rip"
        },
        {
          name: "IS-IS (Intermediate System to Intermediate System)",
          path: "/legacy/protocols-and-statuses/routing-protocols-legacy/isis"
        }
      ]
    }
  ]
};

export default ProtocolsAndStatuses;