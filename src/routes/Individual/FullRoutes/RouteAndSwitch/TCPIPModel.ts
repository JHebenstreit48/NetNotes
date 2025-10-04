import { RouteObject } from 'react-router-dom';

import NetworkAccess from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/NetworkAccess';

const TCPIPModel: RouteObject[] = [
    ...NetworkAccess,
];

export default TCPIPModel;