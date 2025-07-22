import { Outlet, useNavigate } from "react-router";

import TabsNavigation from "./TabsNavigation";

export default function DashboardLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-900 px-6 py-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Dashboard Article</h1>
        <button
          onClick={() => navigate("/create")}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
        >
          + Add new
        </button>
      </div>

      <div className="mb-4">
        <TabsNavigation />
      </div>

      <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 shadow-lg">
        <Outlet />
      </div>
    </div>
  );
}
