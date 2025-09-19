import { RouteObject } from 'react-router-dom';

import NetworkAccess from '@/routes/IndividualRoutes/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/NetworkAccess';

const TCPIPModel: RouteObject[] = [
    ...NetworkAccess,
];

export default TCPIPModel;