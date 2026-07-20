import { RouteObject } from "react-router-dom";

import CoreConcepts from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/CoreConcepts';
import FramesAndAddressing from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/FramesAndAddressing';

const DataLink: RouteObject[] = [
    ...CoreConcepts,
    ...FramesAndAddressing,
];

export default DataLink;