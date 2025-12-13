import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/FullRoutes/RouteAndSwitch/Fundamentals';
import Legacy from '@/routes/Individual/FullRoutes/RouteAndSwitch/Legacy';
import TCPIPModel from '@/routes/Individual/FullRoutes/RouteAndSwitch/TCPIPModel';
import Cloud from '@/routes/Individual/FullRoutes/RouteAndSwitch/Cloud';


const routeAndSwitch: RouteObject[] = [
    ...Fundamentals,
    ...Legacy,
    ...TCPIPModel,
    ...Cloud
];

export default routeAndSwitch;