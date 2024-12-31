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
    name: "Certifications Overview", // General certification details
    subpages: [
      { name: "CCNA Overview", path: "/certifications/ccna" },
      { name: "CCNP Overview", path: "/certifications/ccnp" },
      { name: "DevNet Overview", path: "/certifications/devnet" },
    ],
  },
  {
    name: "Exam Preparation", // Prep resources for both certifications
    subpages: [
      { name: "CCNA Exam Guide", path: "/exam-prep/ccna" },
      { name: "CCNP Exam Guide", path: "/exam-prep/ccnp" },
    ],
  },
  {
    name: "Networking Tools", // Common tools for both certifications
    subpages: [
      { name: "Cisco Packet Tracer", path: "/tools/packet-tracer" },
      { name: "GNS3 Setup", path: "/tools/gns3" },
    ],
  },
  {
    name: "Core Networking Topics", // Shared foundational topics for both CCNA and CCNP
    subpages: [
      { name: "IP Networking Overview", path: "/core-networking/ip-networking-overview" },
      { name: "Routing Protocols", path: "/core-networking/routing" },
      { name: "Switching and VLANs", path: "/core-networking/switching-vlans" },
      { name: "Access Control Lists (ACLs)", path: "/core-networking/acls" },
      { name: "Wireless Networking Basics", path: "/core-networking/wireless" },
      { name: "Networking Protocols (TCP/UDP, HTTP, DNS)", path: "/core-networking/protocols" },
      { name: "Network Security Basics", path: "/core-networking/security" },
    ],
  },
  {
    name: "CCNP Advanced Topics", // Only advanced topics unique to CCNP
    subpages: [
      { name: "Advanced Routing Protocols", path: "/ccnp/advanced-routing" },
      { name: "Advanced Switching Concepts", path: "/ccnp/advanced-switching" },
      { name: "Automation & DevNet", path: "/ccnp/devnet" },
      { name: "Advanced Network Security", path: "/ccnp/security" },
      { name: "VOIP and Collaboration", path: "/ccnp/voip" },
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
