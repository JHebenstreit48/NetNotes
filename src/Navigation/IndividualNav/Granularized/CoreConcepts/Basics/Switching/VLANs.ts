import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const VLANs: Subpage = {
  name: "VLANs",
  subpages: [
    {
      name: "VLAN Overview",
      path: "/corenetworking/l2switching/vlans/overview"
    },
    {
      name: "VLAN Trunking Protocol (VTP)",
      path: "/corenetworking/l2switching/vlans/vtp"
    },
    {
      name: "Inter-VLAN Routing",
      path: "/corenetworking/l2switching/vlans/intervlanrouting"
    },
  ],
};

export default VLANs;
