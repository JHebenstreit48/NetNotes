import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/IndividualRoutes/Granularized/CoreConcepts/Basics/Fundamentals/Fundamentals";
import TCPIPModel from "@/routes/IndividualRoutes/Granularized/CoreConcepts/TCPIPModel/Layers/TCPIPModel";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...TCPIPModel,
];

export default Basics;