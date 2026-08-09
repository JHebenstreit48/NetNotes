import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Basics/Fundamentals";
import PDUsAndSAP from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Basics/PDUsAndSAP";
import ServicePrimitives from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Basics/ServicePrimitives";
import Presentation from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Basics/Presentation";
import Session from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Basics/Session";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...PDUsAndSAP,
  ...ServicePrimitives,
  ...Presentation,
  ...Session
];

export default Basics;
