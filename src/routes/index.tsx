import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import ErrorPage from '@/Pages/Special/Error';
import Home from '@/Pages/Special/Home';
import About from '@/Pages/Special/About';

import certifications from '@/routes/Sections/certifications';
import routeAndSwitch from '@/routes/Sections/routeAndSwitch';
import networkSecurity from '@/routes/Sections/networkSecurity';
import voip from '@/routes/Sections/voip';
import tools from '@/routes/Sections/tools';

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
      { path: 'about', element: <About /> },
      ...certifications,
      ...routeAndSwitch,
      ...networkSecurity,
      ...voip,
      ...tools,
    ],
  },
]);