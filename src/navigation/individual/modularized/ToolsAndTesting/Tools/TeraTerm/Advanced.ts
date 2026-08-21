import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Macros (TTL)",
      subpages: [
        {
          name: "Writing & Running Macros",
          path: "/tools-and-testing/tools/terminal-emulators/tera-term/advanced/macros-ttl/writing-and-running-macros"
        },
        {
          name: "Auto-Login & Command Automation",
          path: "/tools-and-testing/tools/terminal-emulators/tera-term/advanced/macros-ttl/auto-login-and-command-automation"
        }
      ]
    },
    {
      name: "Automation & Launch Options",
      subpages: [
        {
          name: "Command-Line Flags",
          path: "/tools-and-testing/tools/terminal-emulators/tera-term/advanced/automation-and-launch-options/command-line-flags"
        },
        {
          name: "Scheduled/Unattended Sessions",
          path: "/tools-and-testing/tools/terminal-emulators/tera-term/advanced/automation-and-launch-options/scheduled-unattended-sessions"
        }
      ]
    }
  ]
};

export default Advanced;