import { RouteObject } from 'react-router-dom';

import Basics from '@/routes/IndividualRoutes/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Physical/Basics';
// import Advanced from '@/routes/IndividualRoutes/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Physical/Advanced';

const Physical: RouteObject[] = [
    ...Basics,
    // Advanced
];

export default Physical;