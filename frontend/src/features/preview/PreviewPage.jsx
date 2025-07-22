import { useCallback, useEffect, useState } from "react";

import ArticleCard from "./components/ArticleCard";
import Pagination from "./components/Pagination";

const LIMIT = 5;

export default function PreviewPage() {
  const [articles, setArticles] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const offset = (page - 1) * LIMIT;
      const res = await fetch(
        `http://localhost:8080/article?limit=${LIMIT}&offset=${offset}&status=publish`
      );
      const data = await res.json();
      setArticles(data.data);
      setTotal(data.total);
    } catch (err) {
      console.error("Failed to fetch articles:", err);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const totalPages = Math.ceil(total / LIMIT);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Published Articles</h1>

      {loading ? (
        <p>Loading...</p>
      ) : articles.length === 0 ? (
        <p className="text-gray-500">No published articles found.</p>
      ) : (
        <div className="space-y-8">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              category={article.category}
              content={article.content}
            />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
        />
      )}
    </div>
  );
}
