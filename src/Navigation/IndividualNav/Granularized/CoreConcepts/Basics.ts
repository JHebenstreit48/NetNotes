import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/Fundamentals/Fundamentals";
import TCPIPModel from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/TCPIPModel"

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    TCPIPModel,

  ]
};

export default Basics;