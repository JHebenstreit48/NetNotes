import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Overview from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/Fundamentals/Basics/Overview";
import DevicesAndModels from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/Fundamentals/Basics/DevicesAndModels";

const Fundamentals: Subpage = {
    name: "Fundamentals",
    subpages: [
        Overview,
        DevicesAndModels
    ]
};

export default Fundamentals;
