import { Subpage } from "@/Navigation/NavigationTypes";

const TCPIPModel: Subpage = {
  name: "TCP/IP Model",
  subpages: [
    {
              name: "Application Layer",
              subpages: [
                { name: "Overview", path: "/corenetworking/tcpipmodel/applicationlayer/overview" },
                { name: "HTTP/HTTPS", path: "/corenetworking/tcpipmodel/applicationlayer/httphttps" },
                { name: "DNS", path: "/corenetworking/tcpipmodel/applicationlayer/dns" },
              ],
            },
            // Application Layer end
  
            // Transport Layer start
            {
              name: "Transport Layer",
              subpages: [
                { name: "Overview", path: "/corenetworking/tcpipmodel/transportlayer/overview" },
                { name: "TCP vs UDP", path: "/corenetworking/tcpipmodel/transportlayer/tcpvsudp" },
              ],
            },
            // Transport Layer end
  
            // Internet Layer start
            {
              name: "Internet Layer",
              subpages: [
                { name: "Overview of Internet Layer", path: "/corenetworking/tcpipmodel/internetlayer/overview" },
                { name: "IPv4 vs IPv6", path: "/corenetworking/tcpipmodel/internetlayer/ipv4vsipv6" },
                { name: "Subnet Mask and Default Gateway", path: "/corenetworking/tcpipmodel/internetlayer/subnetmaskandgateway" },
              ],
            },
            // Internet Layer end
  
            // Network Access Layer Start
            {
              name: "Network Access Layer",
              subpages: [
  
                // Data Link Layer Start
                {
                  name: "Data Link Layer",
                  subpages: [
                    { name: "Data Link Layer Overview", path: "/corenetworking/tcpipmodel/datalinklayer/overview" },
                    { name: "Burned-In Address", path: "/corenetworking/tcpipmodel/datalinklayer/bia" },
                    { name: "Address Resolution Protocol (ARP)", path: "/corenetworking/tcpipmodel/datalinklayer/arp" },
                  ],
                },
                // Data Link Layer End
  
                // Physical Layer Start
                {
                  name: "Physical Layer",
                  subpages: [
                    { name: "Physical Layer Overview", path: "/corenetworking/tcpipmodel/physicallayer/overview" },
                    { name: "Data Representation", path: "/corenetworking/tcpipmodel/physicallayer/datarepresentation" },
                    { name: "Standards of Communication", path: "/corenetworking/tcpipmodel/physicallayer/standardsofcommunication" },
                    { name: "Encapsulation and De-encapsulation", path: "/corenetworking/tcpipmodel/physicallayer/encapsulationanddeencapsulation" },
                  ],
                },
            ],
            },
            ],
};

export default TCPIPModel;

    //           name: "Application Layer",
    //           subpages: [
    //             { name: "Overview", path: "/corenetworking/tcpipmodel/applicationlayer/overview" },
    //             { name: "HTTP/HTTPS", path: "/corenetworking/tcpipmodel/applicationlayer/httphttps" },
    //             { name: "DNS", path: "/corenetworking/tcpipmodel/applicationlayer/dns" },
    //           ],
    //         },
    //         // Application Layer end
  
    //         // Transport Layer start
    //         {
    //           name: "Transport Layer",
    //           subpages: [
    //             { name: "Overview", path: "/corenetworking/tcpipmodel/transportlayer/overview" },
    //             { name: "TCP vs UDP", path: "/corenetworking/tcpipmodel/transportlayer/tcpvsudp" },
    //           ],
    //         },
    //         // Transport Layer end
  
    //         // Internet Layer start
    //         {
    //           name: "Internet Layer",
    //           subpages: [
    //             { name: "Overview of Internet Layer", path: "/corenetworking/tcpipmodel/internetlayer/overview" },
    //             { name: "IPv4 vs IPv6", path: "/corenetworking/tcpipmodel/internetlayer/ipv4vsipv6" },
    //             { name: "Subnet Mask and Default Gateway", path: "/corenetworking/tcpipmodel/internetlayer/subnetmaskandgateway" },
    //           ],
    //         },
    //         // Internet Layer end
  
    //         // Network Access Layer Start
    //         {
    //           name: "Network Access Layer",
    //           subpages: [
  
    //             // Data Link Layer Start
    //             {
    //               name: "Data Link Layer",
    //               subpages: [
    //                 { name: "Data Link Layer Overview", path: "/corenetworking/tcpipmodel/datalinklayer/overview" },
    //                 { name: "Burned-In Address", path: "/corenetworking/tcpipmodel/datalinklayer/bia" },
    //                 { name: "Address Resolution Protocol (ARP)", path: "/corenetworking/tcpipmodel/datalinklayer/arp" },
    //               ],
    //             },
    //             // Data Link Layer End
  
    //             // Physical Layer Start
    //             {
    //               name: "Physical Layer",
    //               subpages: [
    //                 { name: "Physical Layer Overview", path: "/corenetworking/tcpipmodel/physicallayer/overview" },
    //                 { name: "Data Representation", path: "/corenetworking/tcpipmodel/physicallayer/datarepresentation" },
    //                 { name: "Standards of Communication", path: "/corenetworking/tcpipmodel/physicallayer/standardsofcommunication" },
    //                 { name: "Encapsulation and De-encapsulation", path: "/corenetworking/tcpipmodel/physicallayer/encapsulationanddeencapsulation" },
    //               ],
    //             },
