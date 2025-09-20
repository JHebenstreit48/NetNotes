import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Provisioning: Subpage = {
  name: "Provisioning",
  subpages: [
    {
      name: "DHCP Options & Voice VLANs",
      path: "/tools/diagnostics/provisioning/dhcp-voice-vlans"
    },
    {
      name: "TFTP/HTTP(S) Servers & File Layouts",
      path: "/tools/diagnostics/provisioning/servers-file-layouts"
    }
  ]
};

export default Provisioning;