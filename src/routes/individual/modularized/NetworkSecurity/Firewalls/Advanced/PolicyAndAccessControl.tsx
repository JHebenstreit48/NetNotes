import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RuleDesignAndOrder = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Firewalls/Advanced/PolicyAndAccessControl/RuleDesignAndOrder'));
const AccessControlStrategies = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Firewalls/Advanced/PolicyAndAccessControl/AccessControlStrategies'));

const PolicyAndAccessControl: RouteObject[] = [
  {
    path: '/firewalls/advanced/policy/rule-design',
    element: <RuleDesignAndOrder />,
  },
  {
    path: '/firewalls/advanced/policy/access-control-strategies',
    element: <AccessControlStrategies />,
  },
];

export default PolicyAndAccessControl;
