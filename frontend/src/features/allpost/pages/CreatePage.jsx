import FormArticle from "../components/FormArticle";
import { Link } from "react-router";

export default function CreatePage() {
  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <Link
          to={"/article"}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          Back
        </Link>
        <h2 className="text-2xl font-bold  text-white">Create New Article</h2>
      </div>
      <FormArticle />
    </>
  );
}
