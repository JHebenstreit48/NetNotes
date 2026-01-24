import { RouteObject } from "react-router-dom";

import DataLink from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/DataLink';
import Physical from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical';

const Basics: RouteObject[] = [
    ...DataLink,
    ...Physical,
];

export default Basics;