import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Connecting",
      subpages: [
        {
          name: "Serial Sessions",
          path: "/tools-and-testing/tools/terminal-emulators/tera-term/basics/connecting/serial-sessions"
        },
        {
          name: "SSH & TCP/IP Sessions",
          path: "/tools-and-testing/tools/terminal-emulators/tera-term/basics/connecting/ssh-and-tcp-ip-sessions"
        }
      ]
    },
    {
      name: "Logging",
      subpages: [
        {
          name: "Basic Session Logging",
          path: "/tools-and-testing/tools/terminal-emulators/tera-term/basics/logging/basic-session-logging"
        },
        {
          name: "Log Formats & Verbosity",
          path: "/tools-and-testing/tools/terminal-emulators/tera-term/basics/logging/log-formats-and-verbosity"
        }
      ]
    }
  ]
};

export default Basics;