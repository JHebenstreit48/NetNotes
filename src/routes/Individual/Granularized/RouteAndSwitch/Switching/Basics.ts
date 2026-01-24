import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/RouteAndSwitch/Switching/Basics/Fundamentals";
import HardwareAndHistory from "@/routes/Individual/Granularized/RouteAndSwitch/Switching/Basics/HardwareAndHistory";
import Glossary from "@/routes/Individual/Granularized/RouteAndSwitch/Switching/Basics/Glossary";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...HardwareAndHistory,
  ...Glossary,
];

export default Basics;
