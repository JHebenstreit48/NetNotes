import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import pages from "@/Navigation/Pages";
import { Page, Subpage } from "@/Navigation/NavigationTypes";

type DropdownDirection = "up" | "down" | "start" | "end";

// Prepare the navigation data for rendering
const navigationPages: Page[] = pages;

interface NavigationProps {
  dropdownDirection?: DropdownDirection; // Define the dropdownDirection prop
}

const Navigation: React.FC<NavigationProps> = ({
  dropdownDirection = "down",
}) => {
  const [activeDropdown, setActiveDropdown] = useState<Set<string>>(new Set());
  const [filterValues, setFilterValues] = useState<{ [key: string]: string }>(
    {}
  );

  const toggleDropdown = (key: string) => {
    setActiveDropdown((prev) => {
      const newDropdowns = new Set(prev);
      if (newDropdowns.has(key)) {
        newDropdowns.delete(key); // Close the dropdown if it's already active
      } else {
        newDropdowns.add(key); // Open the dropdown
      }
      return newDropdowns;
    });
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }));
  };

  const searchSubpages = (subpages: Subpage[], filterText: string): Subpage[] => {
    const lowerFilter = filterText.toLowerCase();

    return subpages.flatMap((subpage) => {
      const matches = subpage.name.toLowerCase().includes(lowerFilter);
      const matchingChildren = subpage.subpages
        ? searchSubpages(subpage.subpages, filterText)
        : [];

      if (matches) {
        return [{ ...subpage, subpages: matchingChildren }];
      }

      return matchingChildren;
    });
  };

  const renderSubpages = (
    subpages: Subpage[],
    parentKey: string,
    level: number = 1
  ): React.ReactNode[] => {
    const filterText = filterValues[parentKey] || "";

    const filteredSubpages = filterText
      ? searchSubpages(subpages, filterText)
      : subpages;

    return filteredSubpages.map((subpage, index) => {
      const key = `${parentKey}-${index}`;
      const isActive = activeDropdown.has(key);

      return (
        <div
          key={key}
          className={`dropdownItem level-${level}`} // Keeps the level-based CSS classes
        >
          {subpage.path ? (
            <Dropdown.Item
              as={Link}
              to={subpage.path}
              className="dropdownLink" // Keeps the clickable link style
            >
              {subpage.name}
            </Dropdown.Item>
          ) : (
            <>
              <Dropdown.ItemText
                className={`dropdownButton level-${level}`} // Keeps the hierarchical button styling
                onClick={() => toggleDropdown(key)}
              >
                {subpage.name}
              </Dropdown.ItemText>
              {isActive && subpage.subpages && (
                <div className={`dropdownMenu level-${level} active`}>
                  {renderSubpages(subpage.subpages, key, level + 1)}
                </div>
              )}
            </>
          )}
        </div>
      );
    });
  };

  return (
    <div className="navigationMenu">
      <div className="navigationContent">
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav className="me-auto">
                {navigationPages.map((page, index) => {
                  const pageKey = `page-${index}`;
                  const isActive = activeDropdown.has(pageKey);

                  // Special handling for Home: no dropdown
                  if (page.name === "Home" && page.subpages.length === 0) {
                    return (
                      <Nav.Link
                        key={pageKey}
                        as={Link}
                        to="/"
                        className="dropdownButton homeButton" // Applies Home-specific CSS
                      >
                        {page.name}
                      </Nav.Link>
                    );
                  }

                  // Render other pages with subpages
                  return (
                    <Dropdown
                      key={pageKey}
                      show={isActive}
                      onToggle={(isOpen) => toggleDropdown(pageKey)}
                      className="dropdown" // Keeps the dropdown styling
                      drop={dropdownDirection}
                    >
                      <Dropdown.Toggle
                        as="button"
                        id={`dropdown-toggle-${pageKey}`}
                        className={`dropdownButton ${isActive ? "active" : ""}`} // Keeps toggle button style
                      >
                        {page.name}
                        {page.subpages.length > 0 && (
                          <span
                            className={`dropdownArrow ${
                              isActive ? "up" : "down"
                            }`} // Keeps the arrow styling
                          />
                        )}
                      </Dropdown.Toggle>

                      {page.subpages.length > 0 && (
                        <Dropdown.Menu
                          className={`dropdownContent ${
                            isActive ? "active" : ""
                          }`} // Keeps dropdown content styling
                        >
                          <Form.Control
                            autoFocus
                            className="mx-3 my-2 w-auto filterInput" // Keeps search bar styling
                            placeholder="Type to filter..."
                            onChange={(e) =>
                              handleFilterChange(pageKey, e.target.value)
                            }
                            value={filterValues[pageKey] || ""}
                          />
                          {renderSubpages(page.subpages, pageKey)}
                        </Dropdown.Menu>
                      )}
                    </Dropdown>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;

  // {
  //   name: "Home",
  //   subpages: [],
  // },
  // {
  //   name: "Certifications Overview",
  //   subpages: [
  //     { name: "CCNA Overview", path: "/certifications/ccna" },
  //     { name: "CCNP Overview", path: "/certifications/ccnp" },
  //     { name: "DevNet Overview", path: "/certifications/devnet" },
  //   ],
  // },
  // {
  //   name: "Exam Preparation",
  //   subpages: [
  //     // CCNA Prep Start
  //     {
  //       name: "CCNA",
  //       subpages: [
  //         { name: "CCNA Exam Guide", path: "/exam-prep/ccna/guide" },
  //         { name: "CCNA Practice Questions", path: "/examprep/ccna/questions" },
  //       ],
  //     },
  //     // CCNA Prep End

  //     // CCNP Prep Start
  //     {
  //       name: "CCNP",
  //       subpages: [
  //         { name: "CCNP Exam Guide", path: "/examprep/ccnp/guide" },
  //         { name: "CCNP Practice Questions", path: "/examprep/ccnp/questions" },
  //       ],
  //     },
  //     // CCNP Prep End

  //     // DevNet Prep Start
  //     {
  //       name: "DevNet",
  //       subpages: [
  //         { name: "DevNet Exam Guide", path: "/examprep/devnet/guide" },
  //         { name: "DevNet Practice Questions", path: "/examprep/devnet/questions" },
  //       ],
  //     },
  //     // DevNet Prep End
  //   ],
  // },

  // // Networking Tools Start
  // {
  //   name: "Networking Tools",
  //   subpages: [


  //     // GNS3 Setup Start
  //     {
  //       name: "GNS3 Setup",
  //       subpages: [
  //         { name: "GNS3 Basics", path: "/tools/gns3/basics" },
  //         { name: "GNS3 Advanced Setup", path: "/tools/gns3/advanced" },
  //       ],
  //     },
  //     // GNS3 Setup End
  //   ],
  // },
  // // Networking Tools End

  // // Core Networking Topics start
  // {
  //   name: "Core Networking",
  //   subpages: [

  //     // OSI Model Etart
  //     {
  //       name: "OSI Model",
 

  //     // TCP/IP Model start
  //     {
  //       name: "TCP/IP Model",
  //       subpages: [


  //     // Routing Protocols start
  //     {
  //       name: "Routing Protocols",
  //       subpages: [
  //         { name: "Static Routing", path: "/corenetworking/routing/staticrouting" },
  //         { name: "Dynamic Routing", path: "/corenetworking/routing/dynamicrouting" },
  //         { name: "Routing Protocol Comparisons", path: "/corenetworking/routing/comparisons" },
  //       ],
  //     },
  //     // Routing Protocols end

  //     // Layer 2 Switching start
  //     {
  //       name: "Layer 2 Switching",
  //       subpages: [
  //         {
  //           name: "Switching",
  //           subpages: [
  //             {
  //               name: "Switching Overview",
  //               path: "/corenetworking/l2switching/switching/overview"
  //             },
  //             {
  //               name: "Ethernet Speed History",
  //               path: "/corenetworking/l2switching/switching/ethernetspeedshistory"
  //             },
  //             {
  //               name: "Layer 2 Switching",
  //               path: "/corenetworking/l2switching/switching/layer2switching"
  //             },
  //             { name: "MAC Address Table",
  //               path: "/corenetworking/l2switching/switching/macaddresstable"
  //             },
  //             {
  //               name: "Switching Glossary",
  //               path: "/corenetworking/l2switching/switching/glossary"
  //             } 
  //           ],
  //         },

  //         // VLANs Start
  //         {
  //           name: "VLANs",
  //           subpages: [
  //             { name: "VLAN Overview", path: "/corenetworking/l2switching/vlans/overview" },
  //             { name: "VLAN Trunking Protocol (VTP)", path: "/corenetworking/l2switching/vlans/vtp" },
  //             { name: "Inter-VLAN Routing", path: "/corenetworking/l2switching/vlans/intervlanrouting" },
  //           ],
  //         },
  //         // VLANs End
  //       ],
  //     },
  //     // Layer 2 Switching end

  //     // ACLs Start
  //     {
  //       name: "Access Control Lists",
  //       subpages: [
  //         { name: "Standard ACLs", path: "/corenetworking/acls/standard" },
  //         { name: "Extended ACLs", path: "/corenetworking/acls/extended" },
  //         { name: "ACL Configuration Examples", path: "/corenetworking/acls/examples" },
  //       ],
  //     },
  //     // ACLs End

  //     // Wireless Networking Start
  //     {
  //       name: "Wireless Networking",
  //       subpages: [
  //         { name: "Wireless Standards", path: "/corenetworking/wireless/standards" },
  //         { name: "Wireless Security", path: "/corenetworking/wireless/security" },
  //         { name: "Wireless Troubleshooting", path: "/corenetworking/wireless/troubleshooting" },
  //       ],
  //     },
  //     // Wireless Networking End

  //     // Network Security Start
  //     {
  //       name: "Network Security",
  //       subpages: [
  //         { name: "Firewalls", path: "/corenetworking/security/firewalls" },
  //         { name: "Intrusion Detection", path: "/corenetworking/security/ids" },
  //         { name: "Encryption Basics", path: "/corenetworking/security/encryption" },
  //       ],
  //     },
  //     // Network Security End
  //   ],
  // },
  // // Core Networking End

  // // CCNP Advanced Topics start
  // {
  //   name: "CCNP Advanced",
  //   subpages: [
  //     {
  //       name: "Advanced Routing Protocols",
  //       subpages: [
  //         { name: "BGP Basics", path: "/ccnp/advancedrouting/bgp" },
  //         { name: "OSPF Advanced Concepts", path: "/ccnp/advancedrouting/ospf" },
  //         { name: "EIGRP Advanced Concepts", path: "/ccnp/advancedrouting/eigrp" },
  //       ],
  //     },
  //     {
  //       name: "Advanced Switching Concepts",
  //       subpages: [
  //         { name: "Spanning Tree Protocol", path: "/ccnp/advancedswitching/stp" },
  //         { name: "EtherChannel", path: "/ccnp/advancedswitching/etherchannel" },
  //         { name: "Switch Stack Configuration", path: "/ccnp/advancedswitching/switchstack" },
  //       ],
  //     },
  //     {
  //       name: "Automation & DevNet",
  //       subpages: [
  //         { name: "Python Automation", path: "/ccnp/devnet/python" },
  //         { name: "Ansible Basics", path: "/ccnp/devnet/ansible" },
  //         { name: "Network Programmability", path: "/ccnp/devnet/programmability" },
  //       ],
  //     },
  //     {
  //       name: "Advanced Network Security",
  //       subpages: [
  //         { name: "VPNs", path: "/ccnp/security/vpns" },
  //         { name: "Advanced Firewalls", path: "/ccnp/security/firewalls" },
  //         { name: "Zero Trust Networks", path: "/ccnp/security/zerotrust" },
  //       ],
  //     },
  //     {
  //       name: "VOIP and Collaboration",
  //       subpages: [
  //         { name: "VOIP Basics", path: "/ccnp/voip/basics" },
  //         { name: "VOIP Protocols", path: "/ccnp/voip/protocols" },
  //         { name: "VOIP Troubleshooting", path: "/ccnp/voip/troubleshooting" },
  //       ],
  //     },
  //   ],
  // },
  // // CCNP Advanced Topics end
