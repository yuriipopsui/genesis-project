// react router configuration
import { lazy } from "react";
import urls from "./urls";

export const routes = [
  {
    key: "home",
    path: urls.home,
    Component: lazy(() => import("../pages/HomePage/HomePage")),
  },
  {
    key: "courses",
    path: urls.courses,
    Component: lazy(() => import("../pages/CoursesPage/CoursesPage")),
  },
  {
    key: "course",
    path: `${urls.course}/:courseId`,
    Component: lazy(() => import("../pages/CoursePage/CoursePage")),
  },
];
