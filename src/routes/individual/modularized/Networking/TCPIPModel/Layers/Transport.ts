import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Networking/TCPIPModel/Layers/Transport/Basics";
import Advanced from "@/routes/individual/modularized/Networking/TCPIPModel/Layers/Transport/Advanced";

const Transport: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Transport;
