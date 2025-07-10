import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Application from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Layers/Application";
import Internet from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Layers/Internet";
import Transport from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Layers/Transport";
import NetworkAccess from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Layers/NetworkAccess";

const TCPIPModel: Subpage = {
    name: "TCP/IP Model",
    subpages: [
        Application,
        Internet,
        Transport,
        NetworkAccess,
    ]
};

export default TCPIPModel;