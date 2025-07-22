import { AllPostPage } from "./features/allpost";
import MainLayout from "./components/MainLayout";
import { createBrowserRouter } from "react-router";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <AllPostPage />,
      },
    ],
  },
]);

export default Router;
