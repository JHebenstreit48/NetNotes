import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Networking/Mobile/Basics";
import Advanced from "@/routes/Individual/Granularized/Networking/Mobile/Advanced";

const Mobile: RouteObject[] = [
    ...Basics,
    ...Advanced,
];

export default Mobile;