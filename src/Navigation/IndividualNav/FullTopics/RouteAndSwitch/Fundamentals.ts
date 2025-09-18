import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Overview from "@/Navigation/IndividualNav/Granularized/RouteAndSwitch/Fundamentals/Overview";
import DevicesAndModels from "@/Navigation/IndividualNav/Granularized/RouteAndSwitch/Fundamentals/DevicesAndModels";

const Fundamentals: Subpage = {
    name: "Fundamentals",
    subpages: [
        Overview,
        DevicesAndModels
    ]
};

export default Fundamentals;
