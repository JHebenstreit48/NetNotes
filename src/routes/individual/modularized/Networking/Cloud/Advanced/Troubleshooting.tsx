import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndEventCorrelation = lazy(() => import('@/pages/mainTabs/Networking/Cloud/Advanced/Troubleshooting/LogsAndEventCorrelation'));
const RemotePacketCapture = lazy(() => import('@/pages/mainTabs/Networking/Cloud/Advanced/Troubleshooting/RemotePacketCapture'));

const Troubleshooting: RouteObject[] = [
  {
    path: '/networking/cloud/advanced/troubleshooting/logs-and-event-correlation',
    element: <LogsAndEventCorrelation />,
  },
  {
    path: '/networking/cloud/advanced/troubleshooting/remote-packet-capture',
    element: <RemotePacketCapture />,
  },
];

export default Troubleshooting;
