import {
  ArticleLoader,
  DraftPage,
  PublishedPage,
  TrashPage,
} from "./features/dashboard";

import DashboardLayout from "./components/DashboardLayout";
import { createBrowserRouter } from "react-router";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <PublishedPage />,
        loader: ArticleLoader,
      },
      {
        path: "draft",
        element: <DraftPage />,
        loader: ArticleLoader,
      },
      {
        path: "trash",
        element: <TrashPage />,
        loader: ArticleLoader,
      },
    ],
  },
]);

export default Router;
