import { RouteObject } from "react-router-dom";

import Foundations from "@routes/individual/FullRoutes/Networking/Foundations";
import TCPIPModel from "@routes/individual/FullRoutes/Networking/TCPIPModel";
import Switching from "@routes/individual/FullRoutes/Networking/Switching";
import Wireless from "@routes/individual/FullRoutes/Networking/wireless";
import Mobile from "@routes/individual/FullRoutes/Networking/mobile";
import Cloud from "@routes/individual/FullRoutes/Networking/Cloud";
import Legacy from "@routes/individual/FullRoutes/Networking/Legacy";

const Networking: RouteObject[] = [
  ...Foundations,
  ...TCPIPModel,
  ...Switching,
  ...Wireless,
  ...Mobile,
  ...Cloud,
  ...Legacy,
];

export default Networking;