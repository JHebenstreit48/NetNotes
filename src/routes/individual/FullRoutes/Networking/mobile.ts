import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Networking/Mobile/Basics";
import Advanced from "@/routes/individual/modularized/Networking/Mobile/Advanced";

const Mobile: RouteObject[] = [
    ...Basics,
    ...Advanced,
];

export default Mobile;