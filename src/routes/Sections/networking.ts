import { RouteObject } from "react-router-dom";

import Foundations from "@/routes/Individual/FullRoutes/Networking/Foundations";
import TCPIPModel from "@/routes/Individual/FullRoutes/Networking/TCPIPModel";
import Switching from "@/routes/Individual/FullRoutes/Networking/Switching";
import Routing from "@/routes/Individual/FullRoutes/Networking/routing";
import Wireless from "@/routes/Individual/FullRoutes/Networking/wireless";
import Mobile from "@/routes/Individual/FullRoutes/Networking/mobile";
import Cloud from "@/routes/Individual/FullRoutes/Networking/Cloud";
import Legacy from "@/routes/Individual/FullRoutes/Networking/Legacy";

const Networking: RouteObject[] = [
  ...Foundations,
  ...TCPIPModel,
  ...Switching,
  ...Routing,
  ...Wireless,
  ...Mobile,
  ...Cloud,
  ...Legacy,
];

export default Networking;