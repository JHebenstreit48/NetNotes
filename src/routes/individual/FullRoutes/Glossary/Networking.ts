import { RouteObject } from 'react-router-dom';

import Foundations from '@/routes/individual/modularized/Glossary/Networking/Foundations';
import TCPIPModel from '@/routes/individual/modularized/Glossary/Networking/TCPIPModel';
import Switching from '@/routes/individual/modularized/Glossary/Networking/Switching';

const Networking: RouteObject[] = [
    ...Foundations,
    ...TCPIPModel,
    ...Switching
];

export default Networking;