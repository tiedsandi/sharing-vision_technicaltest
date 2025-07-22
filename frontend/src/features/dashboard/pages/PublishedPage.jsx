import { Pencil, Trash } from "lucide-react";

import { useLoaderData } from "react-router";

export default function PublishedPage() {
  const { data = [] } = useLoaderData();

  const publishedArticles = data.filter(
    (article) => article.status === "publish"
  );

  return (
    <div>
      {publishedArticles.length === 0 ? (
        <div className="text-center text-stone-600 py-10">
          <p className="text-lg">No published articles yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-sm border border-stone-200">
            <thead className="bg-stone-100 text-stone-600 text-sm uppercase">
              <tr>
                <th className="text-left px-4 py-3">Title</th>
                <th className="text-left px-4 py-3">Category</th>
                <th className="text-left px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {publishedArticles.map((article) => (
                <tr
                  key={article.id}
                  className="border-t border-stone-200 hover:bg-stone-50 transition"
                >
                  <td className="px-4 py-3 text-stone-800">{article.title}</td>
                  <td className="px-4 py-3 text-stone-700">
                    {article.category}
                  </td>
                  <td className="px-4 py-3 flex gap-3 items-center text-stone-600">
                    <button className="hover:text-blue-600 transition">
                      <Pencil size={18} />
                    </button>
                    <button className="hover:text-red-600 transition">
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
