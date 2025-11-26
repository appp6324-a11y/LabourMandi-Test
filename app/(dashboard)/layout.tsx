/* UI ONLY — no backend */
import React from "react";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-sm text-slate-600">Overview & stats (skeletons)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card skeletons */}
        <div className="p-4 bg-white rounded shadow">
          <div className="h-6 w-3/4 skeleton mb-4" />
          <div className="h-32 skeleton" />
        </div>

        <div className="p-4 bg-white rounded shadow">
          <div className="h-6 w-2/4 skeleton mb-4" />
          <div className="h-32 skeleton" />
        </div>

        <div className="p-4 bg-white rounded shadow">
          <div className="h-6 w-1/2 skeleton mb-4" />
          <div className="h-32 skeleton" />
        </div>
      </div>

      <div className="mt-6">{children}</div>
    </div>
  );
}
