import { Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";

import ButtonTabs from "../components/ButtonTabs";
import { useSearchParams } from "react-router";

export default function AllPostPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "publish";

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTabChange = (tab) => {
    setSearchParams({ tab });
  };

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:8080/article?status=${activeTab}&limit=10&offset=0`
        );
        const json = await res.json();
        setArticles(json.data || []);
        console.log({ json, activeTab });
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [activeTab]);

  return (
    <div className="space-y-6">
      <ButtonTabs activeTab={activeTab} onChange={handleTabChange} />

      {loading ? (
        <div className="bg-stone-800 p-6 rounded-xl text-center text-stone-400">
          Loading articles...
        </div>
      ) : articles.length === 0 ? (
        <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 text-center">
          <p className="text-stone-400">
            No articles found under <strong>{activeTab}</strong> tab.
          </p>
        </div>
      ) : (
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
      )}
    </div>
  );
}
