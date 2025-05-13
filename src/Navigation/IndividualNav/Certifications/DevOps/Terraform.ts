import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const TerraformNavigation: Subpage = {
  name: "Terraform Associate",
  subpages: [
    {
      name: "HashiCorp Terraform",
      subpages: [
        {
          name: "Certification Overview",
          path: "/certifications/devops/terraform/overview"
        },
        {
          name: "Exam Domains",
          path: "/certifications/devops/terraform/domains"
        }
      ]
    }
  ]
};

export default TerraformNavigation;
