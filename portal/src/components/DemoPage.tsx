"use client";

import { ExternalLink, Bot, Maximize2 } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="flex flex-col gap-5 h-[calc(100vh-8rem)]">
      {/* Header strip */}
      <div className="flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
            <Bot size={18} className="text-indigo-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">NVibe — AI Customer Support Bot</p>
            <p className="text-sm text-gray-500">
              Powered by <code className="code-inline">llama3-8b-nvibe</code> fine-tuned on H100 · 2,677 tok/s · p99 2.1s
            </p>
          </div>
        </div>
        <a
          href="https://demo.nvibe.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex items-center gap-2"
        >
          <ExternalLink size={13} />
          Open full screen
        </a>
      </div>

      {/* Capability badges */}
      <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
        {[
          "Order tracking",
          "Refund requests",
          "FAQ lookup",
          "Output priming",
          "Prefix caching",
          "OpenAI-compatible API",
        ].map((tag) => (
          <span key={tag} className="badge badge-blue">{tag}</span>
        ))}
      </div>

      {/* iframe */}
      <div className="flex-1 card overflow-hidden min-h-0 relative">
        <iframe
          src="https://demo.nvibe.ai"
          className="w-full h-full border-0"
          title="NVibe AI Demo"
          allow="clipboard-write"
        />
        <a
          href="https://demo.nvibe.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 bg-white border border-gray-200 rounded-lg p-1.5 shadow-sm hover:shadow-md transition-shadow text-gray-500 hover:text-gray-900"
          title="Open in new tab"
        >
          <Maximize2 size={14} />
        </a>
      </div>
    </div>
  );
}
