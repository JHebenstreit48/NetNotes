import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Security (Legacy)",
      subpages: [
        {
          name: "Cleartext Risks",
          path: "/legacy/protocols-and-statuses/advanced/security-legacy/cleartext-risks"
        },
        {
          name: "AAA & Banners",
          path: "/legacy/protocols-and-statuses/advanced/security-legacy/aaa-and-banners"
        }
      ]
    },
    {
      name: "Compat & Interop",
      subpages: [
        {
          name: "Gateways & Proxies",
          path: "/legacy/protocols-and-statuses/advanced/compat-and-interop/gateways-and-proxies"
        },
        {
          name: "Legacy Clients Today",
          path: "/legacy/protocols-and-statuses/advanced/compat-and-interop/legacy-clients-today"
        }
      ]
    }
  ]
};

export default Advanced;