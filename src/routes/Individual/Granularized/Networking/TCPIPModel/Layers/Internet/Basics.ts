import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet/Basics/Fundamentals';
import IPAddressing from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing';
import ICMPAndDiagnostics from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet/Basics/ICMPAndDiagnostics';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...IPAddressing,
    ...ICMPAndDiagnostics,
];

export default Basics;