import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(() => import("@/Pages/MainTabs/CoreConcepts/Basics/Fundamentals/Overview/Introduction"))

const Overview: RouteObject[] = [
    {
        path: "/coreconcepts/basics/fundamentals/overview/introduction",
        element: <Introduction />
    }
];

export default Overview