import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/pages/mainTabs/Glossary/Networking/TCPIPModel/Transport/Basics'));

const Transport: RouteObject[] = [
    {
        path: '/glossary/networking/tcp-ip-model/transport/basics',
        element: <Basics />,
    }
];

export default Transport;