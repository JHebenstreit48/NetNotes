import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Networking/Switching/Basics/Fundamentals";
import HardwareAndHistory from "@/routes/Individual/Granularized/Networking/Switching/Basics/HardwareAndPortTypes";
import Glossary from "@/routes/Individual/Granularized/Networking/Switching/Basics/Glossary";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...HardwareAndHistory,
  ...Glossary,
];

export default Basics;
