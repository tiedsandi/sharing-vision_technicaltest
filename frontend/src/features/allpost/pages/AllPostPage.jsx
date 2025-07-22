import { useEffect, useState } from "react";

import ArticleTable from "../components/ArticleTable";
import ButtonTabs from "../components/ButtonTabs";
import EmptyOrLoading from "../components/EmptyOrLoading";
import { useSearchParams } from "react-router";

export default function AllPostPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "publish";

  useEffect(() => {
    const fetchArticles = async () => {
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
    };

    fetchArticles();
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <div className="space-y-6">
      <ButtonTabs activeTab={activeTab} onChange={handleTabChange} />

      {(loading || articles.length === 0) && (
        <EmptyOrLoading
          loading={loading}
          count={articles.length}
          activeTab={activeTab}
        />
      )}

      {!loading && articles.length > 0 && <ArticleTable articles={articles} />}
    </div>
  );
}
