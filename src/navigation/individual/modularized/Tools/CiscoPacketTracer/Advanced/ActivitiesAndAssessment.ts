import type { Subpage } from '@/types/navigation';

const ActivitiesAndAssessment: Subpage = {
  name: 'Activities & Assessment',
  subpages: [
    {
      name: 'Activity Wizard',
      path: '/tools/cisco-packet-tracer/advanced/activities-and-assessment/activity-wizard',
    },
    {
      name: 'Grading & Feedback',
      path: '/tools/cisco-packet-tracer/advanced/activities-and-assessment/grading-and-feedback',
    }
  ]
};

export default ActivitiesAndAssessment;