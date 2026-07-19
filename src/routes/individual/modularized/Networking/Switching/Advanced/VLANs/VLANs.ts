import { RouteObject } from "react-router-dom";

import Concepts from "@/routes/individual/modularized/Networking/Switching/Advanced/VLANs/Concepts";
import Operations from "@/routes/individual/modularized/Networking/Switching/Advanced/VLANs/Operations";
import Routing from "@/routes/individual/modularized/Networking/Switching/Advanced/VLANs/Routing";

const VLANs: RouteObject[] = [
    ...Concepts,
    ...Operations,    
    ...Routing,
];

export default VLANs;