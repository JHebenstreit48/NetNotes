import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import ErrorPage from '@/Pages/Special/Error';
import Home from '@/Pages/Special/Home';

import certifications from '@/routes/RoutesDirectories/certificationsCombined';
import examPrep from '@/routes/RoutesDirectories/examPrep';
import coreConcepts from '@/routes/RoutesDirectories/coreConcepts';
import tools from '@/routes/RoutesDirectories/toolsCombined';

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
      ...examPrep,
      ...coreConcepts,
      ...tools,
    ],
  },
]);
