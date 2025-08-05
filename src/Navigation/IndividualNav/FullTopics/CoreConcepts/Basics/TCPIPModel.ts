import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Application from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Application";
import Internet from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Internet";
import Transport from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Transport";
import NetworkAccess from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/NetworkAccess";

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