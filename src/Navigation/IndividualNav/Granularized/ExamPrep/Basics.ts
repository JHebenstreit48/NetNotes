import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Strategies & Tips",
  subpages: [
    {
      name: "Study Methods",
      subpages: [
        {
          name: "Active Recall & Labs",
          path: "/exam-prep/strategies-and-tips/study-methods/active-recall-and-labs"
        },
        {
          name: "Pomodoro & Spaced Repetition",
          path: "/exam-prep/strategies-and-tips/study-methods/pomodoro-and-spaced-repetition"
        }
      ]
    },
    {
      name: "Test-Taking Tips",
      subpages: [
        {
          name: "Elimination & Flagging",
          path: "/exam-prep/strategies-and-tips/test-taking-tips/elimination-and-flagging"
        },
        {
          name: "Question-First Reading",
          path: "/exam-prep/strategies-and-tips/test-taking-tips/question-first-reading"
        }
      ]
    },
    {
      name: "Time Management",
      subpages: [
        {
          name: "Pacing & Timed Blocks",
          path: "/exam-prep/strategies-and-tips/time-management/pacing-and-timed-blocks"
        },
        {
          name: "Review Windows",
          path: "/exam-prep/strategies-and-tips/time-management/review-windows"
        }
      ]
    },
    {
      name: "Exam Day Prep",
      subpages: [
        {
          name: "Pearson/VUE Checklist",
          path: "/exam-prep/strategies-and-tips/exam-day-prep/pearson-vue-checklist"
        },
        {
          name: "Environment & ID",
          path: "/exam-prep/strategies-and-tips/exam-day-prep/environment-and-id"
        }
      ]
    },
    {
      name: "Resources",
      subpages: [
        {
          name: "Flashcards (Anki/Quizlet)",
          path: "/exam-prep/strategies-and-tips/resources/flashcards-anki-quizlet"
        },
        {
          name: "Practice Tests (Boson/MeasureUp)",
          path: "/exam-prep/strategies-and-tips/resources/practice-tests-boson-measureup"
        },
        {
          name: "Study Templates",
          subpages: [
            {
              name: "Weekly Planner",
              path: "/exam-prep/strategies-and-tips/resources/study-templates/weekly-planner"
            },
            {
              name: "Objective Tracker",
              path: "/exam-prep/strategies-and-tips/resources/study-templates/objective-tracker"
            }
          ]
        }
      ]
    }
  ]
};

export default Basics;