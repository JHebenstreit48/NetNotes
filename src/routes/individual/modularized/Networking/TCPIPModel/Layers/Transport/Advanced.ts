import { RouteObject } from "react-router-dom";

import TCPMechanisms from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/Transport/Advanced/TCPMechanisms';
import UDPDetails from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/Transport/Advanced/UDPDetails';
import Multiplexing from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/Transport/Advanced/Multiplexing';

const Advanced: RouteObject[] = [
    ...TCPMechanisms,
    ...UDPDetails,
    ...Multiplexing,
];

export default Advanced;