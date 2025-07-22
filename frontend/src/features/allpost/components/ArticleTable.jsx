import { Pencil, Trash } from "lucide-react";

export default function ArticleTable({ articles = [] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-stone-700 bg-white">
      <table className="min-w-full text-sm text-stone-800">
        <thead className="bg-stone-100 text-stone-600 uppercase text-xs">
          <tr>
            <th className="text-left px-4 py-3">Title</th>
            <th className="text-left px-4 py-3">Category</th>
            <th className="text-left px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr
              key={article.id}
              className="border-t border-stone-200 hover:bg-stone-50 transition"
            >
              <td className="px-4 py-3">{article.title}</td>
              <td className="px-4 py-3 capitalize">{article.category}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3 text-stone-600">
                  <button
                    className="hover:text-blue-600 transition"
                    title="Edit"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    className="hover:text-red-600 transition"
                    title="Delete"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
