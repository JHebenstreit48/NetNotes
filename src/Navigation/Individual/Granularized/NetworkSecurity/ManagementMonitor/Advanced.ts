import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Telemetry",
      subpages: [
        {
          name: "NetFlow / IPFIX",
          path: "/mgmt/advanced/telemetry/netflow-ipfix"
        },
        {
          name: "Baselines & Thresholds",
          path: "/mgmt/advanced/telemetry/baselines-thresholds"
        }
      ]
    },
    {
      name: "SIEM Integration",
      subpages: [
        {
          name: "Normalization & Parsing",
          path: "/mgmt/advanced/siem/normalization-parsing"
        },
        {
          name: "Alerting & Escalation",
          path: "/mgmt/advanced/siem/alerting-escalation"
        }
      ]
    }
  ]
};

export default Advanced;