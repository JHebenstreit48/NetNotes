import { RouteObject } from "react-router-dom";

import CoreConcepts from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/CoreConcepts';
import FramesAndAddressing from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/FramesAndAddressing';

const DataLink: RouteObject[] = [
    ...CoreConcepts,
    ...FramesAndAddressing,
];

export default DataLink;