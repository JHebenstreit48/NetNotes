import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Overview: Subpage = {
  name: 'Overview',
  subpages: [
    {
      name: 'Fundamentals',
      path: '/coreconcepts/basics/osimodel/fundamentals'
    },
    {
      name: 'Layers Comparison',
      path: '/coreconcepts/basics/osimodel/layercomparison'
    }
  ]
};

export default Overview;