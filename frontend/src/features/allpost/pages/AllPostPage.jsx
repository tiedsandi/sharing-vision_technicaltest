import { Link, useSearchParams } from "react-router";
import { useCallback, useEffect, useState } from "react";

import ArticleTable from "../components/ArticleTable";
import ButtonTabs from "../components/ButtonTabs";
import EmptyOrLoading from "../components/EmptyOrLoading";

export default function AllPostPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "publish";

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8080/article?limit=10&offset=0&status=${activeTab}`
      );
      const result = await response.json();
      setArticles(result.data || []);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [activeTab]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleTabChange = (tab) => {
    setSearchParams({ tab });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      activeTab === "trash"
        ? "Are you sure you want to permanently delete this article?"
        : "Are you sure you want to move this article to trash?"
    );
    if (!confirmDelete) return;

    try {
      const url = `http://localhost:8080/article/${id}`;
      const options =
        activeTab === "trash"
          ? {
              method: "DELETE",
              headers: { Accept: "application/json" },
            }
          : {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ status: "trash" }),
            };

      const res = await fetch(url, options);
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.details || "Failed to delete article");
      }

      fetchArticles();
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <ButtonTabs activeTab={activeTab} onChange={handleTabChange} />
        <Link
          to="create"
          className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          + Create Article
        </Link>
      </div>

      {(loading || articles.length === 0) && (
        <EmptyOrLoading
          loading={loading}
          count={articles.length}
          activeTab={activeTab}
        />
      )}

      {!loading && articles.length > 0 && (
        <ArticleTable articles={articles} onDelete={handleDelete} />
      )}
    </div>
  );
}
