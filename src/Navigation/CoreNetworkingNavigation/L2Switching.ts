import { Subpage } from "@/Navigation/NavigationTypes";

const L2Switching: Subpage = {
  name: "Layer 2 Switching",
  subpages: [
    {
                  name: "Switching",
                  subpages: [
                    {
                      name: "Switching Overview",
                      path: "/corenetworking/l2switching/switching/overview"
                    },
                    {
                      name: "Ethernet Speed History",
                      path: "/corenetworking/l2switching/switching/ethernetspeedshistory"
                    },
                    {
                      name: "Layer 2 Switching",
                      path: "/corenetworking/l2switching/switching/layer2switching"
                    },
                    { name: "MAC Address Table",
                      path: "/corenetworking/l2switching/switching/macaddresstable"
                    },
                    {
                      name: "Switching Glossary",
                      path: "/corenetworking/l2switching/switching/glossary"
                    } 
                  ],
                },
                // OSI and TCP/IP Comparison end
              ],
            };

export default L2Switching;
