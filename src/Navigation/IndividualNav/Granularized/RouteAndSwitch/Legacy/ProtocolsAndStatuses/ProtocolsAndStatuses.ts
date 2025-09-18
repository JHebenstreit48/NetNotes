import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ProtocolsAndStatuses: Subpage = {
  name: "Protocols & Statuses",
  subpages: [
    {
      name: "Remote Access (Legacy)",
      subpages: [
        {
          name: "Telnet",
          path: "/legacy/protocols-and-statuses/telnet"
        },
        {
          name: "Migration to SSH",
          path: "/legacy/protocols-and-statuses/migration-to-ssh"
        }
      ]
    },
    {
      name: "Email (Legacy/Compat)",
      subpages: [
        {
          name: "POP3",
          path: "/legacy/protocols-and-statuses/pop3"
        },
        {
          name: "POP3 vs IMAP",
          path: "/legacy/protocols-and-statuses/pop3-vs-imap"
        }
      ]
    }
  ]
};

export default ProtocolsAndStatuses;