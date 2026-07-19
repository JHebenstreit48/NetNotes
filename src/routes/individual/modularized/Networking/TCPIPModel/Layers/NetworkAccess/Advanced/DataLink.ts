import { RouteObject } from "react-router-dom";

import ChecksAndErrors from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/ChecksAndErrors';
import MTUAndFraming from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/MTUAndFraming';

const DataLink: RouteObject[] = [
    ...ChecksAndErrors,
    ...MTUAndFraming,
];

export default DataLink;