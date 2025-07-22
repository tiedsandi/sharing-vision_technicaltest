const TABS = ["publish", "draft", "trash"];

export default function ButtonTabs({ activeTab, onChange }) {
  return (
    <div className="flex gap-3 justify-center">
      {TABS.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                isActive
                  ? "bg-emerald-500 text-white shadow"
                  : "bg-stone-700 text-stone-300 hover:bg-stone-600"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        );
      })}
    </div>
  );
}
