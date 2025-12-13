import { RouteObject } from "react-router-dom";

import Concepts from "@/routes/Individual/Granularized/RouteAndSwitch/Switching/Advanced/VLANs/Concepts";
import Operations from "@/routes/Individual/Granularized/RouteAndSwitch/Switching/Advanced/VLANs/Operations";
import Routing from "@/routes/Individual/Granularized/RouteAndSwitch/Switching/Advanced/VLANs/Routing";

const VLANs: RouteObject[] = [
    ...Concepts,
    ...Operations,    
    ...Routing,
];

export default VLANs;