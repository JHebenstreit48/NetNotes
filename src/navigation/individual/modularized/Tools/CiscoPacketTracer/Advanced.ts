import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Simulation Analysis",
      subpages: [
        {
          name: "Protocol Inspectors",
          path: "/tools/cisco-packet-tracer/advanced/simulation-analysis/protocol-inspectors"
        },
        {
          name: "Event Workflows",
          path: "/tools/cisco-packet-tracer/advanced/simulation-analysis/event-workflows"
        }
      ]
    },
    {
      name: "Activities & Assessment",
      subpages: [
        {
          name: "Activity Wizard",
          path: "/tools/cisco-packet-tracer/advanced/activities-and-assessment/activity-wizard"
        },
        {
          name: "Grading & Feedback",
          path: "/tools/cisco-packet-tracer/advanced/activities-and-assessment/grading-and-feedback"
        }
      ]
    },
    {
      name: "Templates & Files",
      subpages: [
        {
          name: "Custom Devices & Defaults",
          path: "/tools/cisco-packet-tracer/advanced/templates-and-files/custom-devices-and-defaults"
        },
        {
          name: "Export/Import (PKA/PKZ)",
          path: "/tools/cisco-packet-tracer/advanced/templates-and-files/export-and-import"
        }
      ]
    },
    {
      name: "Collaboration",
      subpages: [
        {
          name: "Multiuser Links",
          path: "/tools/cisco-packet-tracer/advanced/collaboration/multiuser-links"
        },
        {
          name: "Shared Projects",
          path: "/tools/cisco-packet-tracer/advanced/collaboration/shared-projects"
        }
      ]
    },
    {
      name: "Performance & Limits",
      subpages: [
        {
          name: "Scale & Resources",
          path: "/tools/cisco-packet-tracer/advanced/performance-and-limits/scale-and-resources"
        },
        {
          name: "Version Compatibility",
          path: "/tools/cisco-packet-tracer/advanced/performance-and-limits/version-compatibility"
        }
      ]
    }
  ]
};

export default Advanced;