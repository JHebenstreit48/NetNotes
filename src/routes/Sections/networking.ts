import { RouteObject } from "react-router-dom";

import TCPIPModel from "@/routes/Individual/FullRoutes/Networking/TCPIPModel";
import Legacy from "@/routes/Individual/FullRoutes/Networking/Legacy";
import Fundamentals from "@/routes/Individual/FullRoutes/Networking/Foundations";
import Switching from "@/routes/Individual/FullRoutes/Networking/Switching";
import Routing from "@/routes/Individual/FullRoutes/Networking/routing";
import Wireless from "@/routes/Individual/FullRoutes/Networking/wireless";
import Cloud from "@/routes/Individual/FullRoutes/Networking/Cloud";

const Networking: RouteObject[] = [
  ...TCPIPModel,
  ...Legacy,
  ...Fundamentals,
  ...Switching,
  ...Routing,
  ...Wireless,
  ...Cloud,
];

export default Networking;