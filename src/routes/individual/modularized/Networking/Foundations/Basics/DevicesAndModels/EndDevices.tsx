import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Networking/Foundations/Basics/DevicesAndModels/EndDevices/Introduction'));
const Servers = lazy(() => import('@/pages/mainTabs/Networking/Foundations/Basics/DevicesAndModels/EndDevices/Servers'));
const CommonEndDevices = lazy(() => import('@/pages/mainTabs/Networking/Foundations/Basics/DevicesAndModels/EndDevices/CommonEndDevices'));

const Routers: RouteObject[] = [
  {
    path: '/foundations/basics/devices-and-models/end-devices/introduction',
    element: <Introduction />,
  },
  {
    path: '/foundations/basics/devices-and-models/end-devices/servers',
    element: <Servers />,
  },
  {
    path: '/foundations/basics/devices-and-models/end-devices/common-end-devices',
    element: <CommonEndDevices />,
  }
];

export default Routers;