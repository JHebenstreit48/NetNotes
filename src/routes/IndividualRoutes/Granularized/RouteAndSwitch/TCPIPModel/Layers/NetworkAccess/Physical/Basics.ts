import { RouteObject } from 'react-router-dom';

import TransmissionConcepts from '@/routes/IndividualRoutes/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Physical/Lazy-Loaded/TransmissionConcepts';
import EncapsulateAndDeencapsulate from '@/routes/IndividualRoutes/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Physical/Lazy-Loaded/EncapAndDeencap';

const Basics: RouteObject[] = [
    ...TransmissionConcepts,
    ...EncapsulateAndDeencapsulate,
];

export default Basics;