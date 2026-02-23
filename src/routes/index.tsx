import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import ErrorPage from '@/Pages/Special/Error';
import Home from '@/Pages/Special/Home';
import About from '@/Pages/Special/About';

import networking from '@/routes/Sections/networking';
import networkSecurity from '@/routes/Sections/networkSecurity';
import voip from '@/routes/Sections/voip';
import certifications from '@/routes/Sections/certifications';
import tools from '@/routes/Sections/tools';
import glossary from '@/routes/Sections/glossary';

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
      ...networking,
      ...networkSecurity,
      ...voip,
      ...certifications,
      ...tools,
      ...glossary,
    ],
  },
]);