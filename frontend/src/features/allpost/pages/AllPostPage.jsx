import { Link, useSearchParams } from "react-router";
import { useCallback, useEffect, useState } from "react";

import ArticleTable from "../components/ArticleTable";
import ButtonTabs from "../components/ButtonTabs";
import EmptyOrLoading from "../components/EmptyOrLoading";
import Pagination from "../../../components/Pagination";

export default function AllPostPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("tab") || "publish";
  const limit = 10;

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8080/article?limit=${limit}&offset=${offset}&status=${activeTab}`
      );
      const result = await res.json();
      setArticles(result.data || []);
      setTotal(result.total || 0);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [activeTab, offset]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleTabChange = (tab) => {
    setOffset(0); // reset ke halaman pertama saat ganti tab
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

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

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

      {total > limit && (
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onPageChange={(newPage) => setOffset((newPage - 1) * limit)}
        />
      )}
    </div>
  );
}
