import { RouteObject } from 'react-router-dom';

import Application from '@/routes/individual/modularized/Glossary/Networking/TCPIPModel/Application';
import Transport from '@/routes/individual/modularized/Glossary/Networking/TCPIPModel/Transport';
import Internet from '@/routes/individual/modularized/Glossary/Networking/TCPIPModel/Internet';
import NetworkAccess from '@/routes/individual/modularized/Glossary/Networking/TCPIPModel/NetworkAccess';

const TCPIPModel: RouteObject[] = [
  ...Application,
  ...Transport,
  ...Internet,
  ...NetworkAccess
];

export default TCPIPModel;