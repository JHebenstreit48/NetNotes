import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Diagnostics: Subpage = {
  name: 'Diagnostics & Provisioning',
  subpages: [
    {
      name: 'SIP Capture & Call Flows (sngrep + Wireshark filters)',
      path: '/tools/diagnostics/sip-capture-callflows',
    },
    {
      name: 'Device Provisioning Patterns (DHCP 66/150, LLDP-MED, TFTP/HTTP layouts)',
      path: '/tools/diagnostics/provisioning-patterns',
    },
  ],
};

export default Diagnostics;