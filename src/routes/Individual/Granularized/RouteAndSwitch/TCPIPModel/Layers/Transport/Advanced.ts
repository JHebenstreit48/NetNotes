import { RouteObject } from "react-router-dom";

import TCPMechanisms from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Transport/Advanced/TCPMechanisms';
import UDPDetails from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Transport/Advanced/UDPDetails';
import Multiplexing from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Transport/Advanced/Multiplexing';

const Advanced: RouteObject[] = [
    ...TCPMechanisms,
    ...UDPDetails,
    ...Multiplexing,
];

export default Advanced;