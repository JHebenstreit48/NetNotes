import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/WebAndName/Introduction'));
const HTTPHTTPS = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/WebAndName/HTTPHTTPS'));
const DNS = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/WebAndName/DNS'));

const WebAndNameResolution: RouteObject[] = [
  {
    path: '/tcpip-model/layers/application/basics/web-and-name/introduction',
    element: <Introduction />,
  },
  {
    path: '/tcpip-model/layers/application/basics/web-and-name/http-https',
    element: <HTTPHTTPS />,
  },
  {
    path: '/tcpip-model/layers/application/basics/web-and-name/dns',
    element: <DNS />,
  },
];

export default WebAndNameResolution;