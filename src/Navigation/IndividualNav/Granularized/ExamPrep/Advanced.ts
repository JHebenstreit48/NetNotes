import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Exams",
  subpages: [
    {
      name: "Cisco",
      subpages: [
        {
          name: "CCNA",
          subpages: [
            {
              name: "Study Guide & Objectives",
              path: "/exam-prep/exams/cisco/ccna/study-guide-and-objectives"
            },
            {
              name: "Labs & Scenarios",
              path: "/exam-prep/exams/cisco/ccna/labs-and-scenarios"
            }
          ]
        },
        {
          name: "CCNP",
          subpages: [
            {
              name: "Study Guide & Objectives",
              path: "/exam-prep/exams/cisco/ccnp/study-guide-and-objectives"
            },
            {
              name: "Mock Exam (Timed)",
              path: "/exam-prep/exams/cisco/ccnp/mock-exam-timed"
            }
          ]
        }
      ]
    },
    {
      name: "CompTIA",
      subpages: [
        {
          name: "Network+",
          subpages: [
            {
              name: "Study Guide & Objectives",
              path: "/exam-prep/exams/comptia/network-plus/study-guide-and-objectives"
            },
            {
              name: "PBQs & Practice",
              path: "/exam-prep/exams/comptia/network-plus/pbqs-and-practice"
            }
          ]
        },
        {
          name: "Security+",
          subpages: [
            {
              name: "Study Guide & Objectives",
              path: "/exam-prep/exams/comptia/security-plus/study-guide-and-objectives"
            },
            {
              name: "Mock Exam (Timed)",
              path: "/exam-prep/exams/comptia/security-plus/mock-exam-timed"
            }
          ]
        }
      ]
    },
    {
      name: "Cloud",
      subpages: [
        {
          name: "AWS",
          subpages: [
            {
              name: "Study Guide & Objectives",
              path: "/exam-prep/exams/cloud/aws/study-guide-and-objectives"
            },
            {
              name: "Labs & Case Studies",
              path: "/exam-prep/exams/cloud/aws/labs-and-case-studies"
            }
          ]
        },
        {
          name: "Azure",
          subpages: [
            {
              name: "Study Guide & Objectives",
              path: "/exam-prep/exams/cloud/azure/study-guide-and-objectives"
            },
            {
              name: "Labs & Case Studies",
              path: "/exam-prep/exams/cloud/azure/labs-and-case-studies"
            }
          ]
        }
      ]
    },
    {
      name: "DevOps",
      subpages: [
        {
          name: "Kubernetes",
          subpages: [
            {
              name: "CKA/CKAD Study Guide",
              path: "/exam-prep/exams/devops/kubernetes/cka-ckad-study-guide"
            },
            {
              name: "Mock Exam (Timed)",
              path: "/exam-prep/exams/devops/kubernetes/mock-exam-timed"
            }
          ]
        },
        {
          name: "Foundational",
          subpages: [
            {
              name: "Study Guide & Objectives",
              path: "/exam-prep/exams/devops/foundational/study-guide-and-objectives"
            },
            {
              name: "Labs & Scenarios",
              path: "/exam-prep/exams/devops/foundational/labs-and-scenarios"
            }
          ]
        }
      ]
    }
  ]
};

export default Advanced;