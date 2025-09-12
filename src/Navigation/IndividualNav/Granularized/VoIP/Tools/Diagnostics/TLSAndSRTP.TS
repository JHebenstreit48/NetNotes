import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const TLSAndSRTP: Subpage = {
  name: "TLS/SRTP Security",
  subpages: [
    {
      name: "TLS Handshake & Certificates",
      path: "/tools/diagnostics/tls-srtp/tls-handshake-certs"
    },
    {
      name: "SRTP Troubleshooting",
      path: "/tools/diagnostics/tls-srtp/srtp-troubleshooting"
    }
  ]
};

export default TLSAndSRTP;