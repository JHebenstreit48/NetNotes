import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const AzureDevOpsNavigation: Subpage = {
  name: "Azure DevOps",
  subpages: [
    {
      name: "AZ-400",
      subpages: [
        {
          name: "Certification Overview",
          path: "/certifications/devops/azuredevops/overview"
        },
        {
          name: "Skills Measured",
          path: "/certifications/devops/azuredevops/domains"
        }
      ]
    }
  ]
};

export default AzureDevOpsNavigation;
