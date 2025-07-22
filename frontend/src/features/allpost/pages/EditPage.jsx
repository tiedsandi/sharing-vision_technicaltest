import { Link, useLoaderData } from "react-router";

import FormArticle from "../components/FormArticle";

export default function EditPage() {
  const article = useLoaderData();

  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <Link
          to="/"
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          Back
        </Link>
        <h2 className="text-2xl font-bold text-white">Edit Article</h2>
      </div>
      <FormArticle article={article} />
    </>
  );
}
