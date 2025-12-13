import { RouteObject } from "react-router-dom";
import ManagementModels from "@/routes/Individual/Granularized/RouteAndSwitch/Cloud/Basics/ManagementModels";
import Provisioning from "@/routes/Individual/Granularized/RouteAndSwitch/Cloud/Basics/Provisioning";
import Monitoring from "@/routes/Individual/Granularized/RouteAndSwitch/Cloud/Basics/Monitoring";
import ChangeOps from "@/routes/Individual/Granularized/RouteAndSwitch/Cloud/Basics/ChangeOps";



const Basics: RouteObject[] = [
    ...ManagementModels,
    ...Provisioning,
    ...Monitoring,
    ...ChangeOps
];

export default Basics;