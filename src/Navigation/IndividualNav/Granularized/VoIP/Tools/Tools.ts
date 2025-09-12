import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

// ------------------------ Desk Phones Navigation Start ------------------------
import CiscoDeskPhones from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/DeskPhones/Cisco';
import AvayaDeskPhones from "@/Navigation/IndividualNav/Granularized/VoIP/Tools/DeskPhones/Avaya";
import PolycomDeskPhones from "@/Navigation/IndividualNav/Granularized/VoIP/Tools/DeskPhones/Polycom";
// ------------------------ Desk Phones Navigation End --------------------------

// ------------------------ Softphones Navigation Start ------------------------
import BriaAndLinphone from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/Softphones/BriaAndLinphone';
import TeamsAndZoom from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/Softphones/TeamsAndZoom';
// ------------------------ Softphones Navigation End --------------------------  

import Platforms from "@/Navigation/IndividualNav/Granularized/VoIP/Tools/PlatformAndDiagnostic/Platforms";
import Diagnostics from "@/Navigation/IndividualNav/Granularized/VoIP/Tools/PlatformAndDiagnostic/Diagnostics";


const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "VoIP Desk Phones",
      subpages: [
        CiscoDeskPhones,
        AvayaDeskPhones,
        PolycomDeskPhones
      ]
    },
    {
      name: "Softphones & Clients",
      subpages: [
        BriaAndLinphone,
        TeamsAndZoom
      ]
    },
    Platforms,
    Diagnostics,
  ]
};

export default Tools;