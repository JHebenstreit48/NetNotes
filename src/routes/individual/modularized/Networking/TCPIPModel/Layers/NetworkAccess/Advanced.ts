import { RouteObject } from "react-router-dom";

import DataLink from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink';
import Physical from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Advanced/Physical';

const Advanced: RouteObject[] = [
    ...DataLink,
    ...Physical,
];

export default Advanced;