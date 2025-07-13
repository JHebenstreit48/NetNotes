import { RouteObject } from "react-router-dom";

import Basics from "@/routes/IndividualRoutes/Granularized/CoreConcepts/Basics";
import Intermediate from "@/routes/IndividualRoutes/Granularized/CoreConcepts/Intermediate";
import Advanced from "@/routes/IndividualRoutes/Granularized/CoreConcepts/Advanced";

const coreConcepts: RouteObject[] = [
...Basics,
...Intermediate,
...Advanced,
];

export default coreConcepts;