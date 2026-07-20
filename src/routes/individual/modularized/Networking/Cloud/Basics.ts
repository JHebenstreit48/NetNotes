import { RouteObject } from "react-router-dom";

import ManagementModels from "@/routes/individual/modularized/Networking/Cloud/Basics/ManagementModels";
import Provisioning from "@/routes/individual/modularized/Networking/Cloud/Basics/Provisioning";
import Monitoring from "@/routes/individual/modularized/Networking/Cloud/Basics/Monitoring";
import ChangeOps from "@/routes/individual/modularized/Networking/Cloud/Basics/ChangeOps";

const Basics: RouteObject[] = [
  ...ManagementModels,
  ...Provisioning,
  ...Monitoring,
  ...ChangeOps,
];

export default Basics;
