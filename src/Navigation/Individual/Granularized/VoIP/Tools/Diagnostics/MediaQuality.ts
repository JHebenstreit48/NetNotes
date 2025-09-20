import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const MediaQuality: Subpage = {
  name: "Media Quality",
  subpages: [
    {
      name: "RTP & Jitter Analysis",
      path: "/tools/diagnostics/media/rtp-jitter-analysis"
    },
    {
      name: "MOS & Packet Loss",
      path: "/tools/diagnostics/media/mos-packet-loss"
    }
  ]
};

export default MediaQuality;