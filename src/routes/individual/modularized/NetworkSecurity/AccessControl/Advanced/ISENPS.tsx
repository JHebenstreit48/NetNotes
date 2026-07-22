import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PolicyElementsAndConditions = lazy(() => import('@/pages/MainTabs/NetworkSecurity/AccessControl/Advanced/ISENPS/PolicyElementsAndConditions'));
const AuthZFlowsAndResults = lazy(() => import('@/pages/MainTabs/NetworkSecurity/AccessControl/Advanced/ISENPS/AuthZFlowsAndResults'));

const ISENPS: RouteObject[] = [
  {
    path: '/access/advanced/ise-nps/policy-elements',
    element: <PolicyElementsAndConditions />,
  },
  {
    path: '/access/advanced/ise-nps/authz-flows',
    element: <AuthZFlowsAndResults />,
  },
];

export default ISENPS;
