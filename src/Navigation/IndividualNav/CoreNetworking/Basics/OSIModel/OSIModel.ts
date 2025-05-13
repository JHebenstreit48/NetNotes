import { Subpage } from "@/Navigation/NavigationTypes";

const OSIModel: Subpage = {
  name: "OSI Model",
  subpages: [
    {
      name: "OSI Overview",
      subpages: [
        { name: "Overview", path: "/corenetworking/osimodel/overview" },
      ],
    },
    // OSI Model Overview End

    // Unique OSI Layers start
    {
      name: "Unique Layers",
      subpages: [
        {
          name: "Presentation Layer",
          subpages: [
            {
              name: "Overview",
              path: "/corenetworking/osimodel/presentationlayer/overview",
            },
            {
              name: "Data Translation and Encoding",
              path: "/corenetworking/osimodel/presentationlayer/datatranslation",
            },
            {
              name: "Encryption and Compression",
              path: "/corenetworking/osimodel/presentationlayer/encryption",
            },
          ],
        },
        {
          name: "Session Layer",
          subpages: [
            {
              name: "Overview",
              path: "/corenetworking/osimodel/sessionlayer/overview",
            },
            {
              name: "Session Management and Coordination",
              path: "/corenetworking/osimodel/sessionlayer/management",
            },
            {
              name: "Session Establishment and Termination",
              path: "/corenetworking/osimodel/sessionlayer/establishment",
            },
          ],
        },
      ],
    },
    // Unique OSI Layers end

    // Data Link Sublayers start
    {
      name: "Data Link Sublayers",
      subpages: [
        {
          name: "MAC Sublayer (Media Access Control)",
          path: "/corenetworking/osimodel/datalinksublayer/mac",
        },
        {
          name: "LLC Sublayer (Logical Link Control)",
          path: "/corenetworking/osimodel/datalinksublayer/llc",
        },
      ],
    },
    // Data Link Sublayers end

    // Physical Layer Details start
    {
      name: "Physical Layer Details",
      subpages: [
        {
          name: "Physical Media Types",
          path: "/corenetworking/osimodel/physicallayer/media",
        },
        {
          name: "Electrical vs Optical Signals",
          path: "/corenetworking/osimodel/physicallayer/signals",
        },
      ],
    },
    // Physical Layer Details end

    // OSI and TCP/IP Comparison start
    {
      name: "OSI vs TCP/IP",
      subpages: [
        {
          name: "Layer Mapping",
          path: "/corenetworking/osivstcpip/layer-mapping",
        },
        {
          name: "Strengths and Weaknesses",
          path: "/corenetworking/osivstcpip/strengths-weaknesses",
        },
        {
          name: "Historical Context",
          path: "/corenetworking/osivstcpip/history",
        },
      ],
    },
    // OSI and TCP/IP Comparison end
  ],
};

export default OSIModel;
