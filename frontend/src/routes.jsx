import {
  AllPostPage,
  CreatePage,
  EditPage,
  articleLoader,
  createAction,
  updateAction,
} from "./features/allpost";

import MainLayout from "./components/MainLayout";
import { createBrowserRouter } from "react-router";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "article",
        children: [
          { index: true, element: <AllPostPage /> },
          {
            path: "create",
            element: <CreatePage />,
            action: createAction,
          },
          {
            path: "edit/:id",
            element: <EditPage />,
            loader: articleLoader,
            action: updateAction,
          },
        ],
      },
    ],
  },
]);

export default Router;
