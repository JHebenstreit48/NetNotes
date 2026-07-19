import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Basics/Fundamentals";
import Foundations from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Basics/Foundations";
import PDUsAndSAP from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Basics/PDUsAndSAP";
import ServicePrimitives from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Basics/ServicePrimitives";
import Presentation from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Basics/Presentation";
import Session from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Basics/Session";
import GlossaryResources from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Basics/GlossaryResources";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Foundations,
  ...PDUsAndSAP,
  ...ServicePrimitives,
  ...Presentation,
  ...Session,
  ...GlossaryResources,
];

export default Basics;
