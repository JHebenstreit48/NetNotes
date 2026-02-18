import { RouteObject } from "react-router-dom";

import ManagementModels from "@/routes/Individual/Granularized/Networking/Cloud/Basics/ManagementModels";
import Provisioning from "@/routes/Individual/Granularized/Networking/Cloud/Basics/Provisioning";
import Monitoring from "@/routes/Individual/Granularized/Networking/Cloud/Basics/Monitoring";
import ChangeOps from "@/routes/Individual/Granularized/Networking/Cloud/Basics/ChangeOps";

const Basics: RouteObject[] = [
  ...ManagementModels,
  ...Provisioning,
  ...Monitoring,
  ...ChangeOps,
];

export default Basics;
