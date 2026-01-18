import { RouteObject } from 'react-router-dom';

import Layer1 from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Layer1';
import Layer2 from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Layer2';

const Basics: RouteObject[] = [
    ...Layer1,
    ...Layer2
];

export default Basics;