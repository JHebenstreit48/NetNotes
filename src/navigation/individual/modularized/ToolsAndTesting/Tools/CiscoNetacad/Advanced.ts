import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Certificates & Credentials",
      subpages: [
        {
          name: "Completion Certificates",
          path: "/tools-and-testing/tools/cisco-netacad/advanced/certificates-and-credentials/completion-certificates",
        },
        {
          name: "Badges & Sharing",
          path: "/tools-and-testing/tools/cisco-netacad/advanced/certificates-and-credentials/badges-and-sharing",
        },
      ],
    },
    {
      name: "Support",
      subpages: [
        {
          name: "Contacting Support",
          path: "/tools-and-testing/tools/cisco-netacad/advanced/support/contacting-support",
        },
        {
          name: "Account & Enrollment Issues",
          path: "/tools-and-testing/tools/cisco-netacad/advanced/support/account-and-enrollment-issues",
        },
      ],
    },
  ],
};

export default Advanced;