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
          { name: "CCNA Practice Questions", path: "/exam-prep/ccna/questions" },
        ],
      },
      {
        name: "CCNP",
        subpages: [
          { name: "CCNP Exam Guide", path: "/exam-prep/ccnp/guide" },
          { name: "CCNP Practice Questions", path: "/exam-prep/ccnp/questions" },
        ],
      },
    ],
  },
  {
    name: "Networking Tools",
    subpages: [
      {
        name: "Wireshark",
        subpages: [
          { name: "Wireshark Notes", path: "/tools/wireshark/notes" },
          { name: "Wireshark Usage Examples", path: "/tools/wireshark/examples" },
        ],
      },
      {
        name: "Cisco Packet Tracer",
        subpages: [
          { name: "Packet Tracer Notes", path: "/tools/packet-tracer/notes" },
          { name: "Packet Tracer Scenarios", path: "/tools/packet-tracer/scenarios" },
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
  {
    name: "Core Networking Topics",
    subpages: [
      {
        name: "IP Networking Overview",
        subpages: [
          { name: "TCP/IP Model Overview", path: "/core-networking/ip-networking/tcp-ip-overview" },
          {
            name: "Application Layer",
            subpages: [
              { name: "Overview of Application Layer", path: "/core-networking/ip-networking/application-layer/overview" },
              { name: "HTTP/HTTPS", path: "/core-networking/ip-networking/application-layer/http-https" },
              { name: "DNS Basics", path: "/core-networking/ip-networking/application-layer/dns" },
            ],
          },
          {
            name: "Transport Layer",
            subpages: [
              { name: "Overview of Transport Layer", path: "/core-networking/ip-networking/transport-layer/overview" },
              { name: "TCP vs UDP", path: "/core-networking/ip-networking/transport-layer/tcp-vs-udp" },
            ],
          },
          {
            name: "Internet Layer",
            subpages: [
              { name: "Overview of Internet Layer", path: "/core-networking/ip-networking/internet-layer/overview" },
              { name: "IPv4 vs IPv6", path: "/core-networking/ip-networking/internet-layer/ipv4-vs-ipv6" },
              { name: "Subnet Mask and Default Gateway", path: "/core-networking/ip-networking/internet-layer/subnet-gateway" },
            ],
          },
          {
            name: "Data Link Layer",
            subpages: [
              { name: "Overview of Data Link Layer", path: "/core-networking/ip-networking/datalink-layer/overview" },
              { name: "Burned-In Address (MAC Address)", path: "/core-networking/ip-networking/datalink-layer/mac-address" },
              { name: "Address Resolution Protocol (ARP)", path: "/core-networking/ip-networking/datalink-layer/arp" },
            ],
          },
          {
            name: "Physical Layer",
            subpages: [
              { name: "Overview of Physical Layer", path: "/core-networking/ip-networking/physical-layer/overview" },
              { name: "Data Representation", path: "/core-networking/ip-networking/physical-layer/data-representation" },
              { name: "Standards of Communication", path: "/core-networking/ip-networking/physical-layer/standards" },
              { name: "Encapsulation and De-encapsulation", path: "/core-networking/ip-networking/physical-layer/encapsulationanddeencapsulation" },
            ],
          },
        ],
      },
      {
        name: "Routing Protocols",
        subpages: [
          { name: "Static Routing", path: "/core-networking/routing/static" },
          { name: "Dynamic Routing", path: "/core-networking/routing/dynamic" },
          { name: "Routing Protocol Comparisons", path: "/core-networking/routing/comparisons" },
        ],
      },
      {
        name: "Switching and VLANs",
        subpages: [
          {
            name: "Switching",
            subpages: [
              { name: "Switching Basics", path: "/core-networking/switching/basics" },
              { name: "Layer 2 Switching", path: "/core-networking/switching/layer2" },
              { name: "MAC Address Table", path: "/core-networking/switching/mac-address-table" },
            ],
          },
          {
            name: "VLANs",
            subpages: [
              { name: "VLAN Basics", path: "/core-networking/switching/vlans/basics" },
              { name: "VLAN Trunking Protocol (VTP)", path: "/core-networking/switching/vlans/vtp" },
              { name: "Inter-VLAN Routing", path: "/core-networking/switching/vlans/inter-vlan-routing" },
            ],
          },
        ],
      },
      {
        name: "Access Control Lists (ACLs)",
        subpages: [
          { name: "Standard ACLs", path: "/core-networking/acls/standard" },
          { name: "Extended ACLs", path: "/core-networking/acls/extended" },
          { name: "ACL Configuration Examples", path: "/core-networking/acls/examples" },
        ],
      },
      {
        name: "Wireless Networking Basics",
        subpages: [
          { name: "Wireless Standards", path: "/core-networking/wireless/standards" },
          { name: "Wireless Security", path: "/core-networking/wireless/security" },
          { name: "Wireless Troubleshooting", path: "/core-networking/wireless/troubleshooting" },
        ],
      },
      {
        name: "Networking Protocols",
        subpages: [
          { name: "TCP vs UDP", path: "/core-networking/protocols/tcp-vs-udp" },
          { name: "HTTP and HTTPS", path: "/core-networking/protocols/http-https" },
          { name: "DNS Basics", path: "/core-networking/protocols/dns" },
        ],
      },
      {
        name: "Network Security Basics",
        subpages: [
          { name: "Firewalls", path: "/core-networking/security/firewalls" },
          { name: "Intrusion Detection", path: "/core-networking/security/ids" },
          { name: "Encryption Basics", path: "/core-networking/security/encryption" },
        ],
      },
    ],
  },
  {
    name: "CCNP Advanced Topics",
    subpages: [
      {
        name: "Advanced Routing Protocols",
        subpages: [
          { name: "BGP Basics", path: "/ccnp/advanced-routing/bgp" },
          { name: "OSPF Advanced Concepts", path: "/ccnp/advanced-routing/ospf" },
          { name: "EIGRP Advanced Concepts", path: "/ccnp/advanced-routing/eigrp" },
        ],
      },
      {
        name: "Advanced Switching Concepts",
        subpages: [
          { name: "Spanning Tree Protocol", path: "/ccnp/advanced-switching/stp" },
          { name: "EtherChannel", path: "/ccnp/advanced-switching/etherchannel" },
          { name: "Switch Stack Configuration", path: "/ccnp/advanced-switching/switch-stack" },
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
          { name: "Zero Trust Networks", path: "/ccnp/security/zero-trust" },
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
                className={`subpageHeading ${
                  level > 1 ? "nestedSubpageHeading" : ""
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
