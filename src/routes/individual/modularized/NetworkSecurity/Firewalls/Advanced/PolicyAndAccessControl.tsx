import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RuleDesignAndOrder = lazy(() => import('@/pages/mainTabs/NetworkSecurity/Firewalls/Advanced/PolicyAndAccessControl/RuleDesignAndOrder'));
const AccessControlStrategies = lazy(() => import('@/pages/mainTabs/NetworkSecurity/Firewalls/Advanced/PolicyAndAccessControl/AccessControlStrategies'));

const PolicyAndAccessControl: RouteObject[] = [
  {
    path: '/network-security/firewalls/advanced/policy/rule-design',
    element: <RuleDesignAndOrder />,
  },
  {
    path: '/network-security/firewalls/advanced/policy/access-control-strategies',
    element: <AccessControlStrategies />,
  },
];

export default PolicyAndAccessControl;
