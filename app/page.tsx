/* UI ONLY — no backend */
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">LabourMandi — UI skeleton</h1>
        <p className="mt-2 text-slate-600">
          This is a UI-only landing shell. No backend or real APIs are called.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-medium">Get started</h2>
          <p className="mt-2 text-sm text-slate-600">
            Navigate to Dashboard or Labour area to view layout placeholders.
          </p>
          <div className="mt-4">
            <Link href="/dashboard">
              <a className="inline-block px-4 py-2 rounded bg-[var(--primary)] text-white">
                Go to Dashboard (placeholder)
              </a>
            </Link>
          </div>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-medium">Auth</h2>
          <p className="mt-2 text-sm text-slate-600">
            Simple auth layout exists under (auth) route.
          </p>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-medium">Labour area</h2>
          <p className="mt-2 text-sm text-slate-600">
            Labour area layout exists under (labour) route.
          </p>
        </div>
      </section>
    </div>
  );
}
