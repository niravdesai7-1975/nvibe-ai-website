"use client";

import { type Page } from "@/app/page";
import {
  LayoutDashboard,
  Boxes,
  Key,
  Zap,
  BarChart3,
  CreditCard,
  Terminal,
  ChevronRight,
  Cpu,
  Bot,
  FlaskConical,
} from "lucide-react";
import { clsx } from "clsx";

const NAV_SECTIONS = [
  {
    label: "Platform",
    items: [
      { id: "dashboard",   label: "Dashboard",    icon: LayoutDashboard },
      { id: "playground",  label: "Playground",   icon: Terminal },
      { id: "models",      label: "Models",       icon: Boxes },
      { id: "fine-tuning", label: "Fine-Tuning",  icon: Zap },
    ] as { id: Page; label: string; icon: React.ElementType }[],
  },
  {
    label: "Account",
    items: [
      { id: "api-keys", label: "API Keys", icon: Key },
      { id: "usage",    label: "Usage",    icon: BarChart3 },
      { id: "billing",  label: "Billing",  icon: CreditCard },
    ] as { id: Page; label: string; icon: React.ElementType }[],
  },
  {
    label: "Showcase",
    items: [
      { id: "demo",       label: "Live Demo",   icon: Bot },
      { id: "benchmarks", label: "Benchmarks",  icon: FlaskConical },
    ] as { id: Page; label: string; icon: React.ElementType }[],
  },
];

interface SidebarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export default function Sidebar({ activePage, onNavigate }: SidebarProps) {
  return (
    <aside className="w-60 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
      {/* Brand */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm">
            <Cpu size={16} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-gray-900 leading-tight">NVibe</p>
            <p className="text-xs text-gray-400 leading-tight">AI Platform</p>
          </div>
        </div>

        {/* Status pill */}
        <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          All systems operational
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-5 overflow-y-auto">
        {NAV_SECTIONS.map((section) => (
          <div key={section.label}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-3 mb-1.5">
              {section.label}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={clsx(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all text-left",
                      active
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    )}
                  >
                    <Icon size={16} className={active ? "text-white" : "text-gray-400"} />
                    <span className="flex-1 text-sm">{item.label}</span>
                    {active && <ChevronRight size={12} className="text-indigo-200" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User footer */}
      <div className="px-4 py-4 border-t border-gray-100">
        <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-sm font-bold flex-shrink-0">
            D
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Dev Account</p>
            <p className="text-xs text-gray-400 truncate">nv-dev-key</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
