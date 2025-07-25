import { Pencil, Trash } from "lucide-react";

import { Link } from "react-router";

export default function ArticleTable({ articles = [], onDelete }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-stone-700 bg-stone-800">
      <table className="min-w-full text-sm text-stone-200">
        <thead className="bg-stone-700 text-stone-300 uppercase text-xs">
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
              className="border-t border-stone-600 hover:bg-stone-700 transition"
            >
              <td className="px-4 py-3">{article.title}</td>
              <td className="px-4 py-3 capitalize">{article.category}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3 text-stone-300">
                  <Link
                    to={`edit/${article.id}`}
                    className="hover:text-blue-400 transition"
                    title="Edit"
                  >
                    <Pencil size={18} />
                  </Link>
                  <button
                    className="hover:text-red-400 transition cursor-pointer"
                    title="Delete"
                    onClick={() => onDelete(article.id)}
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
