import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/FullRoutes/RouteAndSwitch/Fundamentals';
import Legacy from '@/routes/Individual/FullRoutes/RouteAndSwitch/Legacy';
import TCPIPModel from '@/routes/Individual/FullRoutes/RouteAndSwitch/TCPIPModel';


const routeAndSwitch: RouteObject[] = [
    ...Fundamentals,
    ...Legacy,
    ...TCPIPModel
];

export default routeAndSwitch;