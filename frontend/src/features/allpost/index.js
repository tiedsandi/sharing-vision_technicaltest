import AllPostPage from "./pages/AllPostPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import { loader as articleLoader } from "./loader/article-loader";
import { action as createAction } from "./action/action-create";
import { action as updateAction } from "./action/action-update";

export {
  AllPostPage,
  CreatePage,
  EditPage,
  createAction,
  updateAction,
  articleLoader,
};
