import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Source Validation",
      subpages: [
        {
          name: "IP Source Guard",
          path: "/net-controls/advanced/source-validation/ip-source-guard"
        },
        {
          name: "uRPF (Edge)",
          path: "/net-controls/advanced/source-validation/urpf"
        }
      ]
    },
    {
      name: "802.1X Overview",
      subpages: [
        {
          name: "Supplicant ↔ Authenticator",
          path: "/net-controls/advanced/8021x/supplicant-authenticator"
        },
        {
          name: "Guest / Restricted VLANs",
          path: "/net-controls/advanced/8021x/guest-restricted-vlans"
        }
      ]
    }
  ]
};

export default Advanced;