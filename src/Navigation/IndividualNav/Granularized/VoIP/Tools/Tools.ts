import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ------------------------ Desk Phones Navigation Start ------------------------
import CiscoDeskPhones from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/DeskPhones/Cisco';
import AvayaDeskPhones from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/DeskPhones/Avaya';
import PolycomDeskPhones from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/DeskPhones/Polycom';
// ------------------------ Desk Phones Navigation End --------------------------

// ------------------------ Softphones Navigation Start ------------------------
import BriaAndLinphone from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/Softphones/BriaAndLinphone';
import TeamsAndZoom from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/Softphones/TeamsAndZoom';
// ------------------------ Softphones Navigation End --------------------------

// ------------------------ Platforms Navigation Start ------------------------
import AmazonConnect from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/Platforms/AmazonConnect';
import WebexCalling from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/Platforms/WebexCalling';
import RingCentral from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/Platforms/RingCentral';
// ------------------------ Platforms Navigation End --------------------------

// ------------------------ Diagnostics Navigation Start ------------------------
import Signaling from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/Diagnostics/Signaling';
import MediaQuality from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/Diagnostics/MediaQuality';
import RegistrationAndNAT from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/Diagnostics/RegistrationAndNAT';
import TLSAndSRTP from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/Diagnostics/TLSAndSRTP';
import Provisioning from '@/Navigation/IndividualNav/Granularized/VoIP/Tools/Diagnostics/Provisioning';
// ------------------------ Diagnostics Navigation End --------------------------

const Tools: Subpage = {
  name: 'Tools',
  subpages: [
    {
      name: 'VoIP Desk Phones',
      subpages: [
        CiscoDeskPhones,
        AvayaDeskPhones,
        PolycomDeskPhones,
      ],
    },
    {
      name: 'Softphones & Clients',
      subpages: [
        BriaAndLinphone,
        TeamsAndZoom,
      ],
    },
    {
      name: 'Platforms',
      subpages: [
        AmazonConnect,
        WebexCalling,
        RingCentral,
      ],
    },
    {
      name: 'Diagnostics',
      subpages: [
        Signaling,
        MediaQuality,
        RegistrationAndNAT,
        TLSAndSRTP,
        Provisioning
      ],
    },
  ],
};

export default Tools;