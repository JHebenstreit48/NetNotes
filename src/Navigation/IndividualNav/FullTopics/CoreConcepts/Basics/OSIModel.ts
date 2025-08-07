import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Application7 from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/OSIModel/Layers/7-Application';

import Session5 from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/OSIModel/Layers/5-Session';


const OSIModel: Subpage = {
  name: 'OSI Model',
  subpages: [
    // Fundamentals (OSI-specific, avoids TCP/IP protocol overlap)
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Overview',
          path: '/corenetworking/osimodel/fundamentals/overview',
        },
        {
          name: 'Model Characteristics',
          path: '/corenetworking/osimodel/fundamentals/characteristics',
        },
        {
          name: 'Modern Use in Certifications',
          path: '/corenetworking/osimodel/fundamentals/certificationrelevance',
        },
      ],
    },

    // All 7 OSI layers — labeled and OSI-specific only
    {
      name: 'Layers',
      subpages: [
        Application7,
        {
          name: 'Presentation (6)',
          subpages: [
            {
              name: 'Overview',
              path: '/corenetworking/osimodel/presentationlayer/overview',
            },
            {
              name: 'Data Translation and Encoding',
              path: '/corenetworking/osimodel/presentationlayer/datatranslation',
            },
            {
              name: 'Encryption and Compression',
              path: '/corenetworking/osimodel/presentationlayer/encryption',
            },
          ],
        },
        Session5,
        {
          name: 'Transport (4)',
          subpages: [
            {
              name: 'Overview',
              path: '/corenetworking/osimodel/transportlayer/overview',
            },
            {
              name: 'OSI Transport Functions',
              path: '/corenetworking/osimodel/transportlayer/functions',
            },
          ],
        },
        {
          name: 'Network (3)',
          subpages: [
            {
              name: 'Overview',
              path: '/corenetworking/osimodel/networklayer/overview',
            },
            {
              name: 'Logical Addressing and Routing (OSI)',
              path: '/corenetworking/osimodel/networklayer/routing',
            },
          ],
        },
        {
          name: 'Data Link (2)',
          subpages: [
            {
              name: 'MAC Sublayer (Media Access Control)',
              path: '/corenetworking/osimodel/datalink/mac',
            },
            {
              name: 'LLC Sublayer (Logical Link Control)',
              path: '/corenetworking/osimodel/datalink/llc',
            },
          ],
        },
        {
          name: 'Physical (1)',
          subpages: [
            {
              name: 'Physical Media Types',
              path: '/corenetworking/osimodel/physical/media',
            },
            {
              name: 'Electrical vs Optical Signals',
              path: '/corenetworking/osimodel/physical/signals',
            },
          ],
        },
      ],
    },

    // OSI and TCP/IP Relationship (only comparison allowed here)
    {
      name: 'Model Comparison',
      subpages: [
        {
          name: 'Layer Mapping (OSI to TCP/IP)',
          path: '/corenetworking/osivstcpip/layer-mapping',
        },
        {
          name: 'Layer Differences (OSI vs TCP/IP)',
          path: '/corenetworking/osivstcpip/layer-differences',
        },
        {
          name: 'Strengths and Weaknesses',
          path: '/corenetworking/osivstcpip/strengths-weaknesses',
        },
        {
          name: 'Historical Context',
          path: '/corenetworking/osivstcpip/history',
        },
      ],
    },

    // New top-level section just for reference material
    {
      name: 'Glossary & Resources',
      subpages: [
        {
          name: 'Glossary of Terms',
          path: '/corenetworking/osimodel/resources/glossary',
        },
        {
          name: 'Resources Used',
          path: '/corenetworking/osimodel/resources/references',
        },
      ],
    },
  ],
};

export default OSIModel;