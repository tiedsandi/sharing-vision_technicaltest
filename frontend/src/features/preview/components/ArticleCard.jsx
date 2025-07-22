export default function ArticleCard({ title, category, content }) {
  return (
    <div className="border border-stone-700 bg-stone-800 p-4 rounded shadow text-stone-100">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-sm text-stone-400 mb-2">Category: {category}</p>
      <p className="text-stone-200">{content}</p>
    </div>
  );
}
