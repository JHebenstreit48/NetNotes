import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/individual/modularized/Glossary/Networking/Foundations/Fundamentals';
import Routers from '@/routes/individual/modularized/Glossary/Networking/Foundations/Routers';

const Foundations: RouteObject[] = [
    ...Fundamentals,
    ...Routers
];

export default Foundations;