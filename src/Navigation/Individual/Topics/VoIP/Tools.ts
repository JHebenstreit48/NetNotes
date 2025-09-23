import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

// ------------------------ Desk Phones Navigation Start ------------------------
import CiscoDeskPhones from '@/Navigation/Individual/Granularized/VoIP/Tools/DeskPhones/Cisco';
import AvayaDeskPhones from '@/Navigation/Individual/Granularized/VoIP/Tools/DeskPhones/Avaya';
import PolycomDeskPhones from '@/Navigation/Individual/Granularized/VoIP/Tools/DeskPhones/Polycom';
// ------------------------ Desk Phones Navigation End --------------------------

// ------------------------ Softphones Navigation Start ------------------------
import BriaAndLinphone from '@/Navigation/Individual/Granularized/VoIP/Tools/Softphones/BriaAndLinphone';
import TeamsAndZoom from '@/Navigation/Individual/Granularized/VoIP/Tools/Softphones/TeamsAndZoom';
// ------------------------ Softphones Navigation End --------------------------

// ------------------------ Platforms Navigation Start ------------------------
import AmazonConnect from '@/Navigation/Individual/Granularized/VoIP/Tools/Platforms/AmazonConnect';
import WebexCalling from '@/Navigation/Individual/Granularized/VoIP/Tools/Platforms/WebexCalling';
import RingCentral from '@/Navigation/Individual/Granularized/VoIP/Tools/Platforms/RingCentral';
// ------------------------ Platforms Navigation End --------------------------

// ------------------------ Diagnostics Navigation Start ------------------------
import Signaling from '@/Navigation/Individual/Granularized/VoIP/Tools/Diagnostics/Signaling';
import MediaQuality from '@/Navigation/Individual/Granularized/VoIP/Tools/Diagnostics/MediaQuality';
import RegistrationAndNAT from '@/Navigation/Individual/Granularized/VoIP/Tools/Diagnostics/RegistrationAndNAT';
import TLSAndSRTP from '@/Navigation/Individual/Granularized/VoIP/Tools/Diagnostics/TLSAndSRTP';
import Provisioning from '@/Navigation/Individual/Granularized/VoIP/Tools/Diagnostics/Provisioning';
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