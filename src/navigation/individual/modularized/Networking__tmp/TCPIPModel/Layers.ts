import type { Subpage } from '@/types/navigation';

import Application from "@/navigation/individual/modularized/Networking/TCPIPModel/Layers/Application";
import Transport from "@/navigation/individual/modularized/Networking/TCPIPModel/Layers/Transport";
import Internet from "@/navigation/individual/modularized/Networking/TCPIPModel/Layers/Internet";
import NetworkAccess from "@/navigation/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess";

const Layers: Subpage = {
  name: "Layers",
  subpages: [
    Application,
    Transport,
    Internet,
    NetworkAccess
  ],
};

export default Layers;