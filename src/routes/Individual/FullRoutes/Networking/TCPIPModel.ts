import { RouteObject } from "react-router-dom";

import Application from "@/routes/Individual/Granularized/Networking/TCPIPModel/Application";
import Internet from "@/routes/Individual/Granularized/Networking/TCPIPModel/Internet";
import Transport from "@/routes/Individual/Granularized/Networking/TCPIPModel/Transport";
import NetworkAccess from "@/routes/Individual/Granularized/Networking/TCPIPModel/NetworkAccess";

const TCPIPModel: RouteObject[] = [
  ...Application,
  ...Internet,
  ...Transport,
  ...NetworkAccess,
];
export default TCPIPModel;