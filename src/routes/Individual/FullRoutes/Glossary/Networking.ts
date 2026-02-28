import { RouteObject } from 'react-router-dom';

import TCPIPModel from '@/routes/Individual/Granularized/Glossary/Networking/TCPIPModel';
import Switching from '@/routes/Individual/Granularized/Glossary/Networking/Switching';

const Networking: RouteObject[] = [
    ...TCPIPModel,
    ...Switching
];

export default Networking;