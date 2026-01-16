import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BSSESSSSID = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Wireless/Basics/WLANArchitecture/BSSESSSSID'));
const APModes = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Wireless/Basics/WLANArchitecture/APModes'));

const WLANArchitecture: RouteObject[] = [
  {
    path: '/wireless/basics/architecture/bss-ess-ssid',
    element: <BSSESSSSID />,
  },
  {
    path: '/wireless/basics/architecture/ap-modes',
    element: <APModes />,
  },
];

export default WLANArchitecture;
