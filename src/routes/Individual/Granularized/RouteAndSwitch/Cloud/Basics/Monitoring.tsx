import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DashboardsAndAlerts = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Cloud/Basics/Monitoring/DashboardsAndAlerts')
);
const HealthAndTelemetry = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Cloud/Basics/Monitoring/HealthAndTelemetry')
);

const Monitoring: RouteObject[] = [
  {
    path: '/cloud/basics/monitoring/dashboards-and-alerts',
    element: <DashboardsAndAlerts />,
  },
  {
    path: '/cloud/basics/monitoring/health-and-telemetry',
    element: <HealthAndTelemetry />,
  },
];

export default Monitoring;