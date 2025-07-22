import { NavLink } from "react-router";

const tabs = [
  { name: "Published", to: "/" },
  { name: "Draft", to: "/draft" },
  { name: "Trash", to: "/trash" },
];

export default function TabsNavigation() {
  return (
    <div className="flex justify-center mb-6">
      <nav className="inline-flex rounded-xl bg-stone-800 p-1 shadow-inner">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end
            className={({ isActive }) =>
              `px-5 py-2 text-sm font-medium rounded-lg transition-all
               ${
                 isActive
                   ? "bg-stone-700 text-white shadow-inner"
                   : "text-stone-300 hover:bg-stone-700 hover:text-white"
               }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
