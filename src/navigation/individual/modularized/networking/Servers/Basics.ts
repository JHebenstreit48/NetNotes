import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/networking/servers/basics/fundamentals/introduction"
        },
        {
          name: "Client-Server Model",
          path: "/networking/servers/basics/fundamentals/client-server-model"
        }
      ]
    },
    {
      name: "Hardware & Form Factors",
      subpages: [
        {
          name: "Rack, Tower, and Blade Servers",
          path: "/networking/servers/basics/hardware-and-form-factors/rack-tower-blade"
        },
        {
          name: "Server Components",
          path: "/networking/servers/basics/hardware-and-form-factors/server-components"
        }
      ]
    }
  ]
};

export default Basics;