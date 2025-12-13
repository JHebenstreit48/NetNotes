import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/RouteAndSwitch/Switching/Basics";
import Advanced from "@/routes/Individual/Granularized/RouteAndSwitch/Switching/Advanced";

const Switching: RouteObject[] = [
    ...Basics,
    ...Advanced
];

export default Switching;