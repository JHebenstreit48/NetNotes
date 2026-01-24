import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Basics/Fundamentals";
import Foundations from "@/routes/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Basics/Foundations";
import PDUsAndSAP from "@/routes/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Basics/PDUsAndSAP";
import ServicePrimitives from "@/routes/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Basics/ServicePrimitives";
import Presentation from "@/routes/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Basics/Presentation";
import Session from "@/routes/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Basics/Session";
import GlossaryResources from "@/routes/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Basics/GlossaryResources";

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
