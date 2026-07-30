import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Architecture",
      subpages: [
        {
          name: "Tunnels & Split-Tunnel",
          path: "/networking/cloud/advanced/architecture/tunnels-and-split-tunnel"
        },
        {
          name: "Site/SSO & Multi-Tenant",
          path: "/networking/cloud/advanced/architecture/site-sso-and-multi-tenant"
        }
      ]
    },
    {
      name: "HA & Scale",
      subpages: [
        {
          name: "Redundancy & Failover",
          path: "/networking/cloud/advanced/ha-and-scale/redundancy-and-failover"
        },
        {
          name: "Regions & Latency",
          path: "/networking/cloud/advanced/ha-and-scale/regions-and-latency"
        }
      ]
    },
    {
      name: "Automation & APIs",
      subpages: [
        {
          name: "REST & Webhooks",
          path: "/networking/cloud/advanced/automation-and-apis/rest-and-webhooks"
        },
        {
          name: "Bulk Ops & CI",
          path: "/networking/cloud/advanced/automation-and-apis/bulk-ops-and-ci"
        }
      ]
    },
    {
      name: "Troubleshooting",
      subpages: [
        {
          name: "Logs & Event Correlation",
          path: "/networking/cloud/advanced/troubleshooting/logs-and-event-correlation"
        },
        {
          name: "Remote Packet Capture",
          path: "/networking/cloud/advanced/troubleshooting/remote-packet-capture"
        }
      ]
    }
  ]
};

export default Advanced;