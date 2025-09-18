import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Architecture & Design",
      subpages: [
        {
          name: "Core/Distribution/Access",
          path: "/fundamentals/advanced/architecture-and-design/core-distribution-access"
        },
        {
          name: "Spine-Leaf",
          path: "/fundamentals/advanced/architecture-and-design/spine-leaf"
        }
      ]
    },
    {
      name: "Planes & Traffic",
      subpages: [
        {
          name: "Data vs Control vs Mgmt",
          path: "/fundamentals/advanced/planes-and-traffic/data-vs-control-vs-management"
        },
        {
          name: "Unicast • Multicast • Broadcast",
          path: "/fundamentals/advanced/planes-and-traffic/unicast-multicast-broadcast"
        }
      ]
    },
    {
      name: "Diagrams & Docs",
      subpages: [
        {
          name: "Physical vs Logical",
          path: "/fundamentals/advanced/diagrams-and-docs/physical-vs-logical"
        },
        {
          name: "Naming & Labeling",
          path: "/fundamentals/advanced/diagrams-and-docs/naming-and-labeling"
        }
      ]
    },
    {
      name: "Troubleshooting",
      subpages: [
        {
          name: "Methodology & Flow",
          path: "/fundamentals/advanced/troubleshooting/methodology-and-flow"
        },
        {
          name: "Baselines & Monitoring",
          path: "/fundamentals/advanced/troubleshooting/baselines-and-monitoring"
        }
      ]
    }
  ]
};

export default Advanced;