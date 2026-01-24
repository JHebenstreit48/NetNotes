import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Transport/Basics";
import Advanced from "@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Transport/Advanced";

const Transport: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Transport;
