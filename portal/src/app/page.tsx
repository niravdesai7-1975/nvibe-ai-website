"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import ModelsPage from "@/components/ModelsPage";
import APIKeysPage from "@/components/APIKeysPage";
import FineTuningPage from "@/components/FineTuningPage";
import UsagePage from "@/components/UsagePage";
import BillingPage from "@/components/BillingPage";
import PlaygroundPage from "@/components/PlaygroundPage";
import DemoPage from "@/components/DemoPage";
import BenchmarksPage from "@/components/BenchmarksPage";
import { Bell, Search } from "lucide-react";

export type Page =
  | "dashboard"
  | "models"
  | "api-keys"
  | "fine-tuning"
  | "usage"
  | "billing"
  | "playground"
  | "demo"
  | "benchmarks";

const PAGE_LABELS: Record<Page, string> = {
  dashboard:    "Dashboard",
  playground:   "Playground",
  models:       "Model Catalog",
  "fine-tuning":"Fine-Tuning",
  "api-keys":   "API Keys",
  usage:        "Usage Analytics",
  billing:      "Billing",
  demo:         "Live Demo — NVibe",
  benchmarks:   "Benchmark Results",
};

export default function Home() {
  const [activePage, setActivePage] = useState<Page>("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":    return <Dashboard />;
      case "models":       return <ModelsPage />;
      case "api-keys":     return <APIKeysPage />;
      case "fine-tuning":  return <FineTuningPage />;
      case "usage":        return <UsagePage />;
      case "billing":      return <BillingPage />;
      case "playground":   return <PlaygroundPage />;
      case "demo":         return <DemoPage />;
      case "benchmarks":   return <BenchmarksPage />;
      default:             return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0 shadow-sm">
          <h1 className="font-semibold text-gray-900">{PAGE_LABELS[activePage]}</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search…"
                className="pl-8 pr-4 py-1.5 text-sm bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-48"
              />
            </div>
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full" />
            </button>
            <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
              D
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
