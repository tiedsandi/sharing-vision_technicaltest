export default function EmptyOrLoading({ loading, count, activeTab }) {
  return (
    <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 text-center text-stone-400">
      {loading && "Loading articles..."}
      {!loading && count === 0 && (
        <>
          No articles found under <strong>{activeTab}</strong> tab.
        </>
      )}
    </div>
  );
}
