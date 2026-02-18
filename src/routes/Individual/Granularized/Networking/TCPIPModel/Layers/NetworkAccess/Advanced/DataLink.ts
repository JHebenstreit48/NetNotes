import { RouteObject } from "react-router-dom";

import ChecksAndErrors from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/ChecksAndErrors';
import MTUAndFraming from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/MTUAndFraming';

const DataLink: RouteObject[] = [
    ...ChecksAndErrors,
    ...MTUAndFraming,
];

export default DataLink;