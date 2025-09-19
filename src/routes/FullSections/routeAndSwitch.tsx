import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/IndividualRoutes/FullRoutes/RouteAndSwitch/Fundamentals';
import TCPIPModel from '@/routes/IndividualRoutes/FullRoutes/RouteAndSwitch/TCPIPModel';


const routeAndSwitch: RouteObject[] = [
    ...Fundamentals,
    ...TCPIPModel
];

export default routeAndSwitch;