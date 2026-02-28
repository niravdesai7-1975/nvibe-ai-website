"use client";

import { ExternalLink, FlaskConical } from "lucide-react";

export default function BenchmarksPage() {
  return (
    <div className="flex flex-col gap-4 h-[calc(100vh-8rem)]">
      {/* Header strip */}
      <div className="flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
            <FlaskConical size={18} className="text-indigo-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Benchmark Results</p>
            <p className="text-sm text-gray-500">
              Measured on H100 SXM5 80 GB · GCP us-central1-a · Feb 27, 2026
            </p>
          </div>
        </div>
        <a
          href="/benchmarks.html"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex items-center gap-2"
        >
          <ExternalLink size={13} />
          Open full screen
        </a>
      </div>

      {/* Full-page iframe */}
      <div className="flex-1 card overflow-hidden min-h-0">
        <iframe
          src="/benchmarks.html"
          className="w-full h-full border-0"
          title="NVibe Benchmark Results"
        />
      </div>
    </div>
  );
}
