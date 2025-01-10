import { Link } from "react-router-dom";
import { useState } from "react";
import pages from "@/Navigation/Pages";
import { Page, Subpage } from "@/Navigation/NavigationTypes";

const navigationPages: Page[] = pages;

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

  const Navigation = () => {
    const [activeDropdown, setActiveDropdown] = useState<Set<string>>(new Set());
  
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
  
    const renderSubpages = (
      subpages: Subpage[],
      parentKey: string,
      level: number = 1
    ) => {
      return subpages.map((subpage, index) => {
        const key = `${parentKey}-${index}`;
        const isActive = activeDropdown.has(key);
  
        return (
          <div key={key} className={`dropdownItem level-${level}`}>
            {subpage.path ? (
              <Link to={subpage.path} className="dropdownLink">
                {subpage.name}
              </Link>
            ) : (
              <>
                <button
                  className={`dropdownButton level-${level}`}
                  onClick={() => toggleDropdown(key)}
                >
                  {subpage.name}
                </button>
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
          {navigationPages.map((page, index) => {
            const pageKey = `page-${index}`;
            const isActive = activeDropdown.has(pageKey);
  
            return (
              <div key={pageKey} className="dropdown">
                <button
                  className="dropdownButton"
                  onClick={() => toggleDropdown(pageKey)}
                >
                  {page.name}
                  {page.subpages.length > 0 && (
                    <span className={`dropdownArrow ${isActive ? "up" : "down"}`} />
                  )}
                </button>
                {isActive && page.subpages.length > 0 && (
                  <div className="dropdownContent active">
                    {renderSubpages(page.subpages, pageKey)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default Navigation;
