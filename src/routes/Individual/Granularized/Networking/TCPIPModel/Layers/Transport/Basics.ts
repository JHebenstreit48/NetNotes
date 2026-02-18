import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Transport/Basics/Fundamentals';
import PortsAndSockets from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Transport/Basics/PortsAndSockets';
import Reliability from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Transport/Basics/Reliability';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...PortsAndSockets,
    ...Reliability,
];

export default Basics;