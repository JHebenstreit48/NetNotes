import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Application/Basics";
import Advanced from "@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Application/Advanced";

const Application: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Application;