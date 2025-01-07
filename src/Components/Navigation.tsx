import { Link } from "react-router-dom";
import { useState } from "react";

type Subpage = {
  name: string;
  path?: string;
  subpages?: Subpage[];
};

type Page = {
  name: string;
  subpages: Subpage[];
};

const pages: Page[] = [
  {
    name: "Home",
    subpages: [],
  },
  {
    name: "Certifications Overview",
    subpages: [
      { name: "CCNA Overview", path: "/certifications/ccna" },
      { name: "CCNP Overview", path: "/certifications/ccnp" },
      { name: "DevNet Overview", path: "/certifications/devnet" },
    ],
  },
  {
    name: "Exam Preparation",
    subpages: [
      {
        name: "CCNA",
        subpages: [
          { name: "CCNA Exam Guide", path: "/exam-prep/ccna/guide" },
          { name: "CCNA Practice Questions", path: "/examprep/ccna/questions" },
        ],
      },
      {
        name: "CCNP",
        subpages: [
          { name: "CCNP Exam Guide", path: "/examprep/ccnp/guide" },
          { name: "CCNP Practice Questions", path: "/examprep/ccnp/questions" },
        ],
      },
    ],
  },

  // Networking Tools Start
  {
    name: "Networking Tools",
    subpages: [
      {
        name: "Wireshark",
        subpages: [
          { name: "Wireshark Notes", path: "/tools/wireshark" },
          { name: "Wireshark Usage Examples", path: "/tools/wireshark/examples" },
        ],
      },
      {
        name: "Cisco Packet Tracer",
        subpages: [
          { name: "Packet Tracer Notes", path: "/tools/packettracer/notes" },
          { name: "Packet Tracer Scenarios", path: "/tools/packettracer/scenarios" },
        ],
      },
      {
        name: "GNS3 Setup",
        subpages: [
          { name: "GNS3 Basics", path: "/tools/gns3/basics" },
          { name: "GNS3 Advanced Setup", path: "/tools/gns3/advanced" },
        ],
      },
    ],
  },
  // Networking Tools End

  // Core Networking Topics start
  {
    name: "Core Networking Topics",
    subpages: [

      // IP Networking Overview start
      {
        name: "IP Networking",
        subpages: [
          { name: "IP Networking Overview", path: "/corenetworking/ipnetworking/overview" },
        ],
      },
      // IP Networking Overview end

      // TCP/IP Model start
      {
        name: "TCP/IP Model",
        subpages: [
          // Application Layer start
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

          // Data Link Layer start
          {
            name: "Data Link Layer",
            subpages: [
              { name: "Overview of Data Link Layer", path: "/corenetworking/tcpipmodel/datalinklayer/overview" },
              { name: "Burned-In Address", path: "/corenetworking/tcpipmodel/datalinklayer/bia" },
              { name: "Address Resolution Protocol (ARP)", path: "/corenetworking/tcpipmodel/datalinklayer/arp" },
            ],
          },
          // Data Link Layer end

          // Physical Layer start
          {
            name: "Physical Layer",
            subpages: [
              { name: "Overview of Physical Layer", path: "/corenetworking/tcpipmodel/physicallayer/overview" },
              { name: "Data Representation", path: "/corenetworking/tcpipmodel/physicallayer/datarepresentation" },
              { name: "Standards of Communication", path: "/corenetworking/tcpipmodel/physicallayer/standardsofcommunication" },
              { name: "Encapsulation and De-encapsulation", path: "/corenetworking/tcpipmodel/physicallayer/encapsulationanddeencapsulation" },
            ],
          },
          // Physical Layer end
        ],
      },
      // TCP/IP Model end 

      // Routing Protocols start
      {
        name: "Routing Protocols",
        subpages: [
          { name: "Static Routing", path: "/corenetworking/routing/staticrouting" },
          { name: "Dynamic Routing", path: "/corenetworking/routing/dynamicrouting" },
          { name: "Routing Protocol Comparisons", path: "/corenetworking/routing/comparisons" },
        ],
      },
      // Routing Protocols end

      // Layer 2 Switching start
      {
        name: "Layer 2 Switching",
        subpages: [
          {
            name: "Switching",
            subpages: [
              { name: "Switching Overview", path: "/corenetworking/l2switching/switching/overview" },
              { name: "Layer 2 Switching", path: "/corenetworking/l2switching/switching/layer2switching" },
              { name: "MAC Address Table", path: "/corenetworking/l2switching/switching/macaddresstable" },
            ],
          },

          // VLANs Start
          {
            name: "VLANs",
            subpages: [
              { name: "VLAN Overview", path: "/corenetworking/l2switching/vlans/overview" },
              { name: "VLAN Trunking Protocol (VTP)", path: "/corenetworking/l2switching/vlans/vtp" },
              { name: "Inter-VLAN Routing", path: "/corenetworking/l2switching/vlans/intervlanrouting" },
            ],
          },
          // VLANs End
        ],
      },
      // Layer 2 Switching end

      // ACLs Start
      {
        name: "Access Control Lists",
        subpages: [
          { name: "Standard ACLs", path: "/corenetworking/acls/standard" },
          { name: "Extended ACLs", path: "/corenetworking/acls/extended" },
          { name: "ACL Configuration Examples", path: "/corenetworking/acls/examples" },
        ],
      },
      // ACLs End

      // Wireless Networking Start
      {
        name: "Wireless Networking",
        subpages: [
          { name: "Wireless Standards", path: "/corenetworking/wireless/standards" },
          { name: "Wireless Security", path: "/corenetworking/wireless/security" },
          { name: "Wireless Troubleshooting", path: "/corenetworking/wireless/troubleshooting" },
        ],
      },
      // Wireless Networking End

      // Network Security Start
      {
        name: "Network Security",
        subpages: [
          { name: "Firewalls", path: "/corenetworking/security/firewalls" },
          { name: "Intrusion Detection", path: "/corenetworking/security/ids" },
          { name: "Encryption Basics", path: "/corenetworking/security/encryption" },
        ],
      },
       // Network Security End
    ],
  },
  // Core Networking End

  // CCNP Advanced Topics start
  {
    name: "CCNP Advanced Topics",
    subpages: [
      {
        name: "Advanced Routing Protocols",
        subpages: [
          { name: "BGP Basics", path: "/ccnp/advancedrouting/bgp" },
          { name: "OSPF Advanced Concepts", path: "/ccnp/advancedrouting/ospf" },
          { name: "EIGRP Advanced Concepts", path: "/ccnp/advancedrouting/eigrp" },
        ],
      },
      {
        name: "Advanced Switching Concepts",
        subpages: [
          { name: "Spanning Tree Protocol", path: "/ccnp/advancedswitching/stp" },
          { name: "EtherChannel", path: "/ccnp/advancedswitching/etherchannel" },
          { name: "Switch Stack Configuration", path: "/ccnp/advancedswitching/switchstack" },
        ],
      },
      {
        name: "Automation & DevNet",
        subpages: [
          { name: "Python Automation", path: "/ccnp/devnet/python" },
          { name: "Ansible Basics", path: "/ccnp/devnet/ansible" },
          { name: "Network Programmability", path: "/ccnp/devnet/programmability" },
        ],
      },
      {
        name: "Advanced Network Security",
        subpages: [
          { name: "VPNs", path: "/ccnp/security/vpns" },
          { name: "Advanced Firewalls", path: "/ccnp/security/firewalls" },
          { name: "Zero Trust Networks", path: "/ccnp/security/zerotrust" },
        ],
      },
      {
        name: "VOIP and Collaboration",
        subpages: [
          { name: "VOIP Basics", path: "/ccnp/voip/basics" },
          { name: "VOIP Protocols", path: "/ccnp/voip/protocols" },
          { name: "VOIP Troubleshooting", path: "/ccnp/voip/troubleshooting" },
        ],
      },
    ],
  },
  // CCNP Advanced Topics end
];

const Navigation = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => {
      const newSections = new Set(prev);
      if (newSections.has(key)) {
        newSections.delete(key);
      } else {
        newSections.add(key);
      }
      return newSections;
    });
  };

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const renderSubpages = (
    subpages: Subpage[],
    parentKey: string,
    level: number = 1
  ) =>
    subpages.map((subpage, index) => {
      const key = `${parentKey}-${index}`;
      const isExpanded = expandedSections.has(key);

      return (
        <div key={key}>
          {subpage.path ? (
            <p>
              <Link
                to={subpage.path}
                className={`navLink ${level > 1 ? "nestedLink" : ""}`}
              >
                {subpage.name}
              </Link>
            </p>
          ) : (
            <>
              <button
                className={`subpageHeading ${level > 1 ? "nestedSubpageHeading" : ""
                  }`}
                onClick={() => toggleSection(key)}
                aria-expanded={isExpanded}
              >
                {subpage.name}
                {subpage.subpages && subpage.subpages.length > 0 && (
                  <span
                    className={`dropdownArrow ${isExpanded ? "up" : "down"}`}
                  ></span>
                )}
              </button>
              {isExpanded && subpage.subpages && (
                <div className="nestedSubpages">
                  {renderSubpages(subpage.subpages, key, level + 1)}
                </div>
              )}
            </>
          )}
        </div>
      );
    });

  return (
    <div className={`navigationMenu ${isCollapsed ? "collapsed" : ""}`}>
      <button className="toggleButton" onClick={toggleSidebar}>
        {isCollapsed ? (
          <i className="menuIcon fas fa-bars"></i>
        ) : (
          <i className="closeIcon fas fa-times"></i>
        )}
      </button>

      {!isCollapsed && (
        <div className="navigationContent">
          <div className="accordion">
            {pages.map((page, index) => {
              const pageKey = `page-${index}`;
              const isExpanded = expandedSections.has(pageKey);

              return (
                <div key={pageKey} className="accordionItem">
                  <h2 className="accordionHeader">
                    {page.subpages.length === 0 ? (
                      <Link
                        to="/"
                        className="accordionButton noDropdown"
                        id="homeButton"
                      >
                        {page.name}
                      </Link>
                    ) : (
                      <button
                        className="accordionButton"
                        type="button"
                        onClick={() => toggleSection(pageKey)}
                        aria-expanded={isExpanded}
                      >
                        {page.name}
                        <span
                          className={`dropdownArrow ${isExpanded ? "up" : "down"}`}
                        ></span>
                      </button>
                    )}
                  </h2>
                  {isExpanded && (
                    <div className="accordionCollapse">
                      <div className="accordionBody">
                        {renderSubpages(page.subpages, pageKey)}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
