import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndEventCorrelation = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Cloud/Advanced/Troubleshooting/LogsAndEventCorrelation'));
const RemotePacketCapture = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Cloud/Advanced/Troubleshooting/RemotePacketCapture'));

const Troubleshooting: RouteObject[] = [
  {
    path: '/cloud/advanced/troubleshooting/logs-and-event-correlation',
    element: <LogsAndEventCorrelation />,
  },
  {
    path: '/cloud/advanced/troubleshooting/remote-packet-capture',
    element: <RemotePacketCapture />,
  },
];

export default Troubleshooting;
