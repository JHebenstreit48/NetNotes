import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/servers/basics/fundamentals/introduction"
        },
        {
          name: "Client-Server Model",
          path: "/servers/basics/fundamentals/client-server-model"
        }
      ]
    },
    {
      name: "Hardware & Form Factors",
      subpages: [
        {
          name: "Rack, Tower, and Blade Servers",
          path: "/servers/basics/hardware-and-form-factors/rack-tower-blade"
        },
        {
          name: "Server Components",
          path: "/servers/basics/hardware-and-form-factors/server-components"
        }
      ]
    }
  ]
};

export default Basics;