import { RouteObject } from 'react-router-dom';

import Application from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Application';

import NetworkAccess from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess';

const TCPIPModel: RouteObject[] = [
    ...Application,
    ...NetworkAccess,
    
];

export default TCPIPModel;