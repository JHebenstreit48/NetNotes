import { RouteObject } from "react-router-dom";

import IPAddressing from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing';
import SubnettingAndGateways from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet/Basics/SubnettingAndGateways';
import ICMPAndDiagnostics from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet/Basics/ICMPAndDiagnostics';

const Basics: RouteObject[] = [
    ...IPAddressing,
    ...SubnettingAndGateways,
    ...ICMPAndDiagnostics,
];

export default Basics;