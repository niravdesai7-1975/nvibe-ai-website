"use client";

import { ExternalLink, Bot, Maximize2, PowerOff, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

const ZIA_URL = "https://zia.nvibe.ai";

export default function DemoPage() {
  const [status, setStatus] = useState<"checking" | "online" | "offline">("checking");

  const check = () => {
    setStatus("checking");
    // Probe Streamlit's favicon — loads as an <img> so CORS doesn't block it.
    // Streamlit returns the actual PNG when running; Cloudflare returns an HTML
    // error page (522/521) which the browser cannot decode as an image → onerror.
    const img = new window.Image();
    const timer = setTimeout(() => {
      img.src = "";
      setStatus("offline");
    }, 6000);
    img.onload = () => { clearTimeout(timer); setStatus("online"); };
    img.onerror = () => { clearTimeout(timer); setStatus("offline"); };
    img.src = `https://zia.nvibe.ai/favicon.png?t=${Date.now()}`;
  };

  useEffect(() => { check(); }, []);

  return (
    <div className="flex flex-col gap-4 h-[calc(100vh-8rem)]">
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
        <div className="flex items-center gap-2">
          {status === "online" && (
            <a
              href={ZIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <ExternalLink size={13} />
              Open full screen
            </a>
          )}
          <div className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${
            status === "online"  ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
            status === "offline" ? "bg-red-50 text-red-600 border-red-200" :
                                   "bg-gray-50 text-gray-500 border-gray-200"
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${
              status === "online" ? "bg-emerald-500 animate-pulse" :
              status === "offline" ? "bg-red-400" : "bg-gray-400 animate-pulse"
            }`} />
            {status === "online" ? "Live" : status === "offline" ? "Offline" : "Checking…"}
          </div>
        </div>
      </div>

      {/* Capability badges */}
      <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
        {["Order tracking","Refund requests","FAQ lookup","Output priming","Prefix caching","OpenAI-compatible API"].map((tag) => (
          <span key={tag} className="badge badge-blue">{tag}</span>
        ))}
      </div>

      {/* Content area */}
      <div className="flex-1 card overflow-hidden min-h-0 relative">
        {status === "checking" && (
          <div className="flex flex-col items-center justify-center h-full gap-3 text-gray-400">
            <RefreshCw size={24} className="animate-spin" />
            <p className="text-sm">Checking demo server…</p>
          </div>
        )}

        {status === "offline" && (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-8">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
              <PowerOff size={24} className="text-gray-400" />
            </div>
            <div>
              <p className="font-semibold text-gray-700 text-lg">Demo server is offline</p>
              <p className="text-gray-400 mt-1 max-w-sm">
                The H100 inference server is currently stopped to save costs.
                All other portal features remain available.
              </p>
            </div>
            <div className="flex gap-3 mt-2">
              <button onClick={check} className="btn-secondary flex items-center gap-2 text-sm">
                <RefreshCw size={13} />
                Try again
              </button>
              <a href="mailto:nirav@nvibe.ai" className="btn-primary text-sm">
                Request a live demo
              </a>
            </div>
          </div>
        )}

        {status === "online" && (
          <>
            <iframe
              src={ZIA_URL}
              className="w-full h-full border-0"
              title="NVibe AI Demo"
              allow="clipboard-write"
            />
            <a
              href={ZIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 bg-white border border-gray-200 rounded-lg p-1.5 shadow-sm hover:shadow-md transition-shadow text-gray-500 hover:text-gray-900"
              title="Open in new tab"
            >
              <Maximize2 size={14} />
            </a>
          </>
        )}
      </div>
    </div>
  );
}
