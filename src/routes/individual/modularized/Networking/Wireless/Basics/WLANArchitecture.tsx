import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BSSESSSSID = lazy(() => import('@/pages/mainTabs/Networking/Wireless/Basics/WLANArchitecture/BSSESSSSID'));
const APModes = lazy(() => import('@/pages/mainTabs/Networking/Wireless/Basics/WLANArchitecture/APModes'));

const WLANArchitecture: RouteObject[] = [
  {
    path: '/networking/wireless/basics/architecture/bss-ess-ssid',
    element: <BSSESSSSID />,
  },
  {
    path: '/networking/wireless/basics/architecture/ap-modes',
    element: <APModes />,
  },
];

export default WLANArchitecture;
