import { RouteObject } from "react-router-dom";

import Application from "@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Application";
import Internet from "@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Internet";
import Transport from "@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Transport";
import NetworkAccess from "@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/NetworkAccess";

const TCPIPModel: RouteObject[] = [
  ...Application,
  ...Internet,
  ...Transport,
  ...NetworkAccess,
];
export default TCPIPModel;