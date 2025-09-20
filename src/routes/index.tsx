import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import ErrorPage from '@/Pages/Special/Error';
import Home from '@/Pages/Special/Home';

import certifications from '@/routes/FullSections/certifications';
import routeAndSwitch from '@/routes/FullSections/routeAndSwitch';
import networkSecurity from '@/routes/FullSections/networkSecurity';
import voip from '@/routes/FullSections/voip';
import tools from '@/routes/FullSections/tools';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ...certifications,
      ...routeAndSwitch,
      ...networkSecurity,
      ...voip,
      ...tools,
    ],
  },
]);
