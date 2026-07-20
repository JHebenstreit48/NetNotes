import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Networking/TCPIPModel/Basics';
import Application from "@/routes/individual/modularized/Networking/TCPIPModel/Layers/Application";
import Internet from "@/routes/individual/modularized/Networking/TCPIPModel/Layers/Internet";
import Transport from "@/routes/individual/modularized/Networking/TCPIPModel/Layers/Transport";
import NetworkAccess from "@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess";

const TCPIPModel: RouteObject[] = [
  ...Basics,
  ...Application,
  ...Internet,
  ...Transport,
  ...NetworkAccess,
];
export default TCPIPModel;