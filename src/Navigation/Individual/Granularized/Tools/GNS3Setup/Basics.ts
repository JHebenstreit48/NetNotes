import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Install",
      subpages: [
        {
          name: "GNS3 App & VM",
          path: "/gns3/basics/install/gns3-app-and-vm"
        },
        {
          name: "Requirements & Setup",
          path: "/gns3/basics/install/requirements-and-setup"
        }
      ]
    },
    {
      name: "Images & Templates",
      subpages: [
        {
          name: "Appliances & Import",
          path: "/gns3/basics/images-and-templates/appliances-and-import"
        },
        {
          name: "IOSv/IOU (Licensing)",
          path: "/gns3/basics/images-and-templates/iosv-iou-licensing"
        }
      ]
    },
    {
      name: "Topology & Projects",
      subpages: [
        {
          name: "Nodes & Links",
          path: "/gns3/basics/topology-and-projects/nodes-and-links"
        },
        {
          name: "Projects & Snapshots",
          path: "/gns3/basics/topology-and-projects/projects-and-snapshots"
        }
      ]
    },
    {
      name: "Capture & Console",
      subpages: [
        {
          name: "Wireshark/TShark",
          path: "/gns3/basics/capture-and-console/wireshark-and-tshark"
        },
        {
          name: "Telnet/Serial Access",
          path: "/gns3/basics/capture-and-console/telnet-and-serial-access"
        }
      ]
    }
  ]
};

export default Basics;