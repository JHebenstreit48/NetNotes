import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Segmentation",
      subpages: [
        {
          name: "VLANs vs VRFs",
          path: "/segmentation/basics/segmentation/vlans-vs-vrfs"
        },
        {
          name: "North–South vs East–West",
          path: "/segmentation/basics/segmentation/ns-vs-ew"
        }
      ]
    },
    {
      name: "Zero Trust",
      subpages: [
        {
          name: "Principles",
          path: "/segmentation/basics/zero-trust/principles"
        },
        {
          name: "Identity & Microperimeters",
          path: "/segmentation/basics/zero-trust/identity-microperimeters"
        }
      ]
    }
  ]
};

export default Basics;