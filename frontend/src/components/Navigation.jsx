import { Eye, LayoutDashboard } from "lucide-react";

import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <nav className="flex gap-4">
      <NavLink
        to="/preview"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2  rounded-lg text-sm font-medium transition  ${
            isActive
              ? "bg-emerald-600 text-white"
              : "text-stone-300 hover:bg-stone-700 hover:text-white border"
          }`
        }
      >
        <Eye size={16} />
        Preview
      </NavLink>

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2  rounded-lg text-sm font-medium transition ${
            isActive
              ? "bg-emerald-600 text-white"
              : "text-stone-300 hover:bg-stone-700 hover:text-white border"
          }`
        }
      >
        <LayoutDashboard size={16} />
        All Post
      </NavLink>
    </nav>
  );
}
