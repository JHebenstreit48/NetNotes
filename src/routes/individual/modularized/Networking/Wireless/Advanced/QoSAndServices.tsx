import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WMMAndEDCA = lazy(() => import('@/pages/mainTabs/Networking/Wireless/Advanced/QoSAndServices/WMMAndEDCA'));
const MulticastOverWLAN = lazy(() => import('@/pages/mainTabs/Networking/Wireless/Advanced/QoSAndServices/MulticastOverWLAN'));

const QoSAndServices: RouteObject[] = [
  {
    path: '/networking/wireless/advanced/qos/wmm-and-edca',
    element: <WMMAndEDCA />,
  },
  {
    path: '/networking/wireless/advanced/qos/multicast-over-wlan',
    element: <MulticastOverWLAN />,
  },
];

export default QoSAndServices;
