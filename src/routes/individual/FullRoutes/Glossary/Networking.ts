import { RouteObject } from 'react-router-dom';

import TCPIPModel from '@/routes/individual/modularized/Glossary/Networking/TCPIPModel';
import Switching from '@/routes/individual/modularized/Glossary/Networking/Switching';

const Networking: RouteObject[] = [
    ...TCPIPModel,
    ...Switching
];

export default Networking;