import { RouteObject } from 'react-router-dom';

import CoreConcepts from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/CoreConcepts';
import FramesAndAddressing from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/FramesAndAddressing';

const Layer2: RouteObject[] = [
    ...CoreConcepts,
    ...FramesAndAddressing
];

export default Layer2;