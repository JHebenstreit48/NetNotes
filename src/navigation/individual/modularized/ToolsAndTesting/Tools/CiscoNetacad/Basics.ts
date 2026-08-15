import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/tools-and-testing/tools/cisco-netacad/basics/fundamentals/introduction",
        },
        {
          name: "Account & Enrollment",
          path: "/tools-and-testing/tools/cisco-netacad/basics/fundamentals/account-and-enrollment",
        },
        {
          name: "Course Types (Self-Paced vs Instructor-Led)",
          path: "/tools-and-testing/tools/cisco-netacad/basics/fundamentals/course-types-self-paced-vs-instructor-led",
        },
      ],
    },
    {
      name: "Platform Navigation",
      subpages: [
        {
          name: "Course Dashboard & Modules",
          path: "/tools-and-testing/tools/cisco-netacad/basics/platform-navigation/course-dashboard-and-modules",
        },
        {
          name: "Labs & Assessments",
          path: "/tools-and-testing/tools/cisco-netacad/basics/platform-navigation/labs-and-assessments",
        },
      ],
    },
  ],
};

export default Basics;