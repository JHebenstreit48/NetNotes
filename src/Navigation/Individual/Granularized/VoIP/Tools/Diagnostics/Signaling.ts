import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Signaling: Subpage = {
  name: "Signaling",
  subpages: [
    {
      name: "sngrep — Call Flows",
      path: "/tools/diagnostics/signaling/sngrep-callflows"
    },
    {
      name: "Wireshark — SIP/SDP Filters",
      path: "/tools/diagnostics/signaling/wireshark-sip-sdp"
    }
  ]
};

export default Signaling;