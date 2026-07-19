import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WMMAndEDCA = lazy(() => import('@/Pages/MainTabs/Networking/Wireless/Advanced/QoSAndServices/WMMAndEDCA'));
const MulticastOverWLAN = lazy(() => import('@/Pages/MainTabs/Networking/Wireless/Advanced/QoSAndServices/MulticastOverWLAN'));

const QoSAndServices: RouteObject[] = [
  {
    path: '/wireless/advanced/qos/wmm-and-edca',
    element: <WMMAndEDCA />,
  },
  {
    path: '/wireless/advanced/qos/multicast-over-wlan',
    element: <MulticastOverWLAN />,
  },
];

export default QoSAndServices;
