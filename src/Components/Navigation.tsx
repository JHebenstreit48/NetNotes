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
    name: "Cisco Networking",
    subpages: [
      
      {
        name: "Advanced Certifications",
        subpages: [
          { name: "CCNP Topics", path: "/cisco/ccnp" },
          { name: "DevNet", path: "/cisco/devnet" },
        ],
      },
    ],
  },
  {
    name: "Networking Protocols",
    subpages: [
      { name: "TCP/UDP", path: "/protocols/tcp-udp" },
      { name: "HTTP/HTTPS", path: "/protocols/http-https" },
      { name: "DNS", path: "/protocols/dns" },
    ],
  },
  {
    name: "Access Control Lists (ACLs)",
    subpages: [
      { name: "Standard ACLs", path: "/acls/standard" },
      { name: "Extended ACLs", path: "/acls/extended" },
    ],
  },
  {
    name: "Routing & Switching",
    subpages: [
      { name: "Static Routing", path: "/routing/static" },
      { name: "Dynamic Routing Protocols", path: "/routing/dynamic" },
      { name: "VLANs", path: "/switching/vlans" },
    ],
  },
  {
    name: "Network Security",
    subpages: [
      { name: "Firewall Basics", path: "/security/firewalls" },
      { name: "VPNs", path: "/security/vpns" },
      { name: "Threat Detection", path: "/security/threat-detection" },
    ],
  },
  {
    name: "VOIP",
    subpages: [
      { name: "SIP Protocol", path: "/voip/sip" },
      { name: "Call Setup", path: "/voip/call-setup" },
      { name: "Quality of Service (QoS)", path: "/voip/qos" },
    ],
  },
  {
    name: "Wireless Networking",
    subpages: [
      { name: "802.11 Standards", path: "/wireless/802-11" },
      { name: "Site Surveys", path: "/wireless/site-surveys" },
      { name: "Wireless Security", path: "/wireless/security" },
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
