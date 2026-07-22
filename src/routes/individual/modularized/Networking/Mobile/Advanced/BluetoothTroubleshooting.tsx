import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CommonPairingIssues = lazy(() => import('@/pages/MainTabs/Networking/Mobile/Advanced/BluetoothTroubleshooting/CommonPairingIssues'));
const InterferenceAndDropouts = lazy(() => import('@/pages/MainTabs/Networking/Mobile/Advanced/BluetoothTroubleshooting/InterferenceAndDropouts'));

const BluetoothTroubleshooting: RouteObject[] = [
  {
    path: '/mobile/advanced/bluetooth/common-pairing-issues',
    element: <CommonPairingIssues />,
  },
  {
    path: '/mobile/advanced/bluetooth/interference-and-dropouts',
    element: <InterferenceAndDropouts />,
  },
];

export default BluetoothTroubleshooting;
