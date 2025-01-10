import { Subpage } from "@/Navigation/NavigationTypes";

const CiscoPacketTracer: Subpage = {
  name: "Cisco Packet Tracer",
  subpages: [
    { name: "Packet Tracer Notes", path: "/tools/packettracer/notes" },
    { name: "Packet Tracer Scenarios", path: "/tools/packettracer/scenarios" },
  ],
};

export default CiscoPacketTracer;
