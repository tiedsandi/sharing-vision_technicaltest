import { Form, useActionData } from "react-router";
import { useEffect, useState } from "react";

export default function FormArticle({ article }) {
  const actionData = useActionData();
  const [status, setStatus] = useState(article?.status || "publish");

  useEffect(() => {
    if (article?.status) setStatus(article.status);
  }, [article]);

  return (
    <Form method="post" className="space-y-6">
      {actionData?.error && (
        <div className="text-red-500 text-sm font-medium">
          {actionData.error}
        </div>
      )}

      <input type="hidden" name="status" value={status} />

      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          required
          defaultValue={article?.title || ""}
          className="w-full px-3 py-2 rounded-md bg-stone-700 border border-stone-600 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium mb-1">
          Content
        </label>
        <textarea
          name="content"
          id="content"
          rows="6"
          required
          minLength={200}
          defaultValue={article?.content || ""}
          className="w-full px-3 py-2 rounded-md bg-stone-700 border border-stone-600 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <p className="text-sm text-stone-400 mt-1">Minimal 200 karakter.</p>
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium mb-1">
          Category
        </label>
        <input
          type="text"
          name="category"
          id="category"
          required
          defaultValue={article?.category || ""}
          className="w-full px-3 py-2 rounded-md bg-stone-700 border border-stone-600 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          onClick={() => setStatus("publish")}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
        >
          Publish
        </button>
        <button
          type="submit"
          onClick={() => setStatus("draft")}
          className="bg-stone-600 hover:bg-stone-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
        >
          Save as Draft
        </button>
      </div>
    </Form>
  );
}
