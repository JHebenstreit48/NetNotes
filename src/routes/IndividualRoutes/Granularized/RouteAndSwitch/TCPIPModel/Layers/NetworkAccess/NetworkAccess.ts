import { RouteObject } from 'react-router-dom';

import DataLink from '@/routes/IndividualRoutes/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Combined/DataLink';
import Physical from '@/routes/IndividualRoutes/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Combined/Physical';

const NetworkAccess: RouteObject[] = [
  ...DataLink,
  ...Physical,
];

export default NetworkAccess;