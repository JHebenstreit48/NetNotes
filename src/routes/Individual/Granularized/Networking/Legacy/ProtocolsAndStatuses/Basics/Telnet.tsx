import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TelnetBasics = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/ProtocolsAndStatuses/Basics/Telnet/TelnetBasics'));
const MigrateToSSH = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/ProtocolsAndStatuses/Basics/Telnet/MigrateToSSH'));

const Telnet: RouteObject[] = [
  {
    path: '/legacy/protocols-and-statuses/telnet/basics',
    element: <TelnetBasics />,
  },
  {
    path: '/legacy/protocols-and-statuses/telnet/migrate-to-ssh',
    element: <MigrateToSSH />,
  },
];

export default Telnet;
