import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "NGFW Features",
      subpages: [
        {
          name: "App-ID / IPS / URL",
          path: "/network-security/firewalls/advanced/ngfw/appid-ips-url"
        },
        {
          name: "SSL/TLS Decryption",
          path: "/network-security/firewalls/advanced/ngfw/ssl-tls-decryption"
        }
      ]
    },
    {
      name: "Policy & Access Control",
      subpages: [
        {
          name: "Rule Design & Order",
          path: "/network-security/firewalls/advanced/policy/rule-design"
        },
        {
          name: "Access Control Strategies",
          path: "/network-security/firewalls/advanced/policy/access-control-strategies"
        }
      ]
    },
    {
      name: "High Availability",
      subpages: [
        {
          name: "Failover & Clustering",
          path: "/network-security/firewalls/advanced/ha/failover-clustering"
        },
        {
          name: "State Sync & Health",
          path: "/network-security/firewalls/advanced/ha/state-sync-health"
        }
      ]
    }
  ]
};

export default Advanced;