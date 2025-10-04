import { RouteObject } from 'react-router-dom';

import Basics from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/DataLink/Basics';
import Advanced from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/DataLink/Advanced';

const DataLink: RouteObject[] = [
    ...Basics,
    ...Advanced
];

export default DataLink;