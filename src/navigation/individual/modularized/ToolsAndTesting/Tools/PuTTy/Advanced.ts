import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Session Management",
      subpages: [
        {
          name: "Scrollback & Terminal Settings",
          path: "/tools-and-testing/tools/terminal-emulators/putty/advanced/session-management/scrollback-and-terminal-settings"
        },
        {
          name: "Event Log",
          path: "/tools-and-testing/tools/terminal-emulators/putty/advanced/session-management/event-log"
        }
      ]
    },
    {
      name: "Security & Special Commands",
      subpages: [
        {
          name: "Host Key Verification",
          path: "/tools-and-testing/tools/terminal-emulators/putty/advanced/security-and-special-commands/host-key-verification"
        },
        {
          name: "Special Commands",
          path: "/tools-and-testing/tools/terminal-emulators/putty/advanced/security-and-special-commands/special-commands"
        }
      ]
    }
  ]
};

export default Advanced;