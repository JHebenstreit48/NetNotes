import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import ErrorPage from '@/pages/Special/Error';
import Home from '@/pages/Special/Home';
import About from '@/pages/Special/About';
import RelatedProjects from '@/pages/Special/RelatedProjects';
import QRCodePage from '@/pages/Special/qrCode';

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
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'projects',
        element: <RelatedProjects />
      },
      {
        path: 'qrcode',
        element: <QRCodePage />
      },
      ...networking,
      ...networkSecurity,
      ...voip,
      ...certifications,
      ...tools,
      ...glossary,
    ],
  },
]);