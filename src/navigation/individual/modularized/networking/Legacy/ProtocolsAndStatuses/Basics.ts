import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Telnet",
      subpages: [
        {
          name: "Introduction",
          path: "/networking/legacy/protocols-and-statuses/basics/telnet/introduction"
        },
        {
          name: "Migrate to SSH",
          path: "/networking/legacy/protocols-and-statuses/basics/telnet/migrate-to-ssh"
        },
        {
          name: "SSH Cutover Playbook",
          path: "/networking/legacy/protocols-and-statuses/basics/telnet/ssh-cutover-playbook"
        }
      ]
    },
    {
      name: "POP3",
      subpages: [
        {
          name: "Introduction",
          path: "/networking/legacy/protocols-and-statuses/basics/pop3/introduction"
        },
        {
          name: "POP3 vs IMAP",
          path: "/networking/legacy/protocols-and-statuses/basics/pop3/pop3-vs-imap"
        },
        {
          name: "Mail: POP3→IMAP Migration",
          path: "/networking/legacy/protocols-and-statuses/basics/pop3/mail-pop3-to-imap-migration"
        }
      ]
    },
    {
      name: "RIP",
      subpages: [
        {
          name: "Introduction",
          path: "/networking/legacy/protocols-and-statuses/basics/rip/introduction"
        },
        {
          name: "Distance-Vector Ops",
          path: "/networking/legacy/protocols-and-statuses/basics/rip/distance-vector-ops"
        },
        {
          name: "RIP Timers",
          path: "/networking/legacy/protocols-and-statuses/basics/rip/timers"
        }
      ]
    },
    {
      name: "IS-IS (Legacy)",
      subpages: [
        {
          name: "Introduction",
          path: "/networking/legacy/protocols-and-statuses/basics/isis/introduction"
        },
        {
          name: "Levels & Areas",
          path: "/networking/legacy/protocols-and-statuses/basics/isis/levels-and-areas"
        },
        {
          name: "IS-IS PDUs",
          path: "/networking/legacy/protocols-and-statuses/basics/isis/pdus"
        }
      ]
    },
    {
      name: "TFTP",
      subpages: [
        {
          name: "Introduction",
          path: "/networking/legacy/protocols-and-statuses/basics/tftp/introduction"
        },
        {
          name: "Use Cases & Limits",
          path: "/networking/legacy/protocols-and-statuses/basics/tftp/use-cases-and-limits"
        }
      ]
    }
  ]
};

export default Basics;