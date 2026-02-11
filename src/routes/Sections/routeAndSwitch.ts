import { RouteObject } from "react-router-dom";

import TCPIPModel from "@/routes/Individual/FullRoutes/RouteAndSwitch/TCPIPModel";
import Legacy from "@/routes/Individual/FullRoutes/RouteAndSwitch/Legacy";
import Fundamentals from "@/routes/Individual/FullRoutes/RouteAndSwitch/Foundations";
import Switching from "@/routes/Individual/FullRoutes/RouteAndSwitch/Switching";
import Routing from "@/routes/Individual/FullRoutes/RouteAndSwitch/routing";
import Wireless from "@/routes/Individual/FullRoutes/RouteAndSwitch/wireless";
import Cloud from "@/routes/Individual/FullRoutes/RouteAndSwitch/Cloud";

const routeAndSwitch: RouteObject[] = [
  ...TCPIPModel,
  ...Legacy,
  ...Fundamentals,
  ...Switching,
  ...Routing,
  ...Wireless,
  ...Cloud,
];

export default routeAndSwitch;