import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const KubernetesNavigation: Subpage = {
  name: "Kubernetes",
  subpages: [
    {
      name: "CKA – Kubernetes Administrator",
      subpages: [
        {
          name: "CKA Overview",
          path: "/certifications/devops/kubernetes/cka/overview"
        },
        {
          name: "CKA Domains",
          path: "/certifications/devops/kubernetes/cka/domains"
        }
      ]
    },
    {
      name: "CKAD – App Developer",
      subpages: [
        {
          name: "CKAD Overview",
          path: "/certifications/devops/kubernetes/ckad/overview"
        },
        {
          name: "CKAD Domains",
          path: "/certifications/devops/kubernetes/ckad/domains"
        }
      ]
    }
  ]
};

export default KubernetesNavigation;
