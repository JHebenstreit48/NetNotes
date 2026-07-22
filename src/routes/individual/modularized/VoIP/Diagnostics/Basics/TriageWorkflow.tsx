import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FastTriageChecklist = lazy(() => import('@/pages/mainTabs/VoIP/Diagnostics/Basics/TriageWorkflow/FastTriageChecklist'));
const WhatToCaptureAndWhen = lazy(() => import('@/pages/mainTabs/VoIP/Diagnostics/Basics/TriageWorkflow/WhatToCaptureAndWhen'));

const TriageWorkflow: RouteObject[] = [
  {
    path: '/voip/diagnostics/basics/triage/fast-checklist',
    element: <FastTriageChecklist />,
  },
  {
    path: '/voip/diagnostics/basics/triage/what-to-capture',
    element: <WhatToCaptureAndWhen />,
  },
];

export default TriageWorkflow;
