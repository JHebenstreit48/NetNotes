import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/individual/modularized/Networking/Switching/Basics/Fundamentals";
import HardwareAndHistory from "@/routes/individual/modularized/Networking/Switching/Basics/HardwareAndPortTypes";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...HardwareAndHistory,
];

export default Basics;
