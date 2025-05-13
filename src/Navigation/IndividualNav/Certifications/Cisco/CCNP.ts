import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const CCNPNavigation: Subpage = {
  name: "CCNP",
  subpages: [
    {
      name: "Overview",
      subpages: [
        {
          name: "What is the CCNP?",
          path: "/certifications/ccnp/overview"
        },
        {
          name: "Tracks & Prerequisites",
          path: "/certifications/ccnp/tracks"
        }
      ]
    },
    {
      name: "ENCOR 350-401 (Core Exam)",
      subpages: [
        {
          name: "Exam Overview",
          path: "/certifications/ccnp/encor/overview"
        },
        {
          name: "Exam Topics",
          path: "/certifications/ccnp/encor/topics"
        }
      ]
    },
    {
      name: "Concentration Exams",
      subpages: [
        {
          name: "Exam Options",
          path: "/certifications/ccnp/concentration/options"
        },
        {
          name: "Recommended Paths",
          path: "/certifications/ccnp/concentration/recommendations"
        }
      ]
    },
    {
      name: "Study Resources",
      subpages: [
        {
          name: "Books & Courses",
          path: "/certifications/ccnp/resources/books-courses"
        },
        {
          name: "Labs & Practice",
          path: "/certifications/ccnp/resources/labs"
        }
      ]
    }
  ]
};

export default CCNPNavigation;
