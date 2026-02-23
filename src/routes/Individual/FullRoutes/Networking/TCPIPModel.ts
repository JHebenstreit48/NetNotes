import { RouteObject } from "react-router-dom";

import Basics from '@/routes/Individual/Granularized/Networking/TCPIPModel/Basics';
import Application from "@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Application";
import Internet from "@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet";
import Transport from "@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Transport";
import NetworkAccess from "@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/NetworkAccess";

const TCPIPModel: RouteObject[] = [
  ...Basics,
  ...Application,
  ...Internet,
  ...Transport,
  ...NetworkAccess,
];
export default TCPIPModel;