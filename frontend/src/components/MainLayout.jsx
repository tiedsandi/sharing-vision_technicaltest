import Navigation from "./Navigation";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-stone-900 px-6 py-6 text-white">
      <header className="relative mb-10 flex justify-center items-center">
        <div className="bg-stone-800 px-6 py-3 rounded-xl shadow border border-stone-700">
          <Navigation />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
}
