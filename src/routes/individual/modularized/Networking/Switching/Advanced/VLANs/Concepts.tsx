import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Concepts = lazy(
  () => import('@/pages/mainTabs/Networking/Switching/Advanced/VLANs/Concepts/Concepts')
);
const VoiceAndNative = lazy(
  () => import('@/pages/mainTabs/Networking/Switching/Advanced/VLANs/Concepts/VoiceAndNative')
);

const VLANConcepts: RouteObject[] = [
  {
    path: '/switching/advanced/vlans/concepts/vlan-concepts',
    element: <Concepts />,
  },
  {
    path: '/switching/advanced/vlans/concepts/voice-and-native-vlans',
    element: <VoiceAndNative />,
  },
];

export default VLANConcepts;