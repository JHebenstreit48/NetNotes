import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Server Roles",
      subpages: [
        {
          name: "File & Print Servers",
          path: "/servers/advanced/server-roles/file-and-print-servers"
        },
        {
          name: "DNS & DHCP Servers",
          path: "/servers/advanced/server-roles/dns-and-dhcp-servers"
        }
      ]
    },
    {
      name: "Virtualization",
      subpages: [
        {
          name: "Hypervisors (Type 1 vs Type 2)",
          path: "/servers/advanced/virtualization/hypervisors"
        },
        {
          name: "Virtual Machines vs Containers",
          path: "/servers/advanced/virtualization/vms-vs-containers"
        }
      ]
    },
    {
      name: "Data Center Concepts",
      subpages: [
        {
          name: "Redundancy & Uptime",
          path: "/servers/advanced/data-center/redundancy-and-uptime"
        },
        {
          name: "Cooling & Power",
          path: "/servers/advanced/data-center/cooling-and-power"
        }
      ]
    }
  ]
};

export default Advanced;