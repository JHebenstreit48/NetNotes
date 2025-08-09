import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/IndividualRoutes/Granularized/CoreConcepts/Basics/Fundamentals/Fundamentals";
import OSIModel from "@/routes/IndividualRoutes/Granularized/CoreConcepts/Basics/OSIModel/OSIModel";
import TCPIPModel from "@/routes/IndividualRoutes/Granularized/CoreConcepts/Basics/TCPIPModel/TCPIPModel";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...OSIModel,
    ...TCPIPModel,

];

export default Basics;