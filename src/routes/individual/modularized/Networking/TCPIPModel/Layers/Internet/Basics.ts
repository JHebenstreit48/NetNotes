import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/Internet/Basics/Fundamentals';
import IPAddressing from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing';
import ICMPAndDiagnostics from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/Internet/Basics/ICMPAndDiagnostics';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...IPAddressing,
    ...ICMPAndDiagnostics,
];

export default Basics;