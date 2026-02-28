"use client";

import { useEffect, useState } from "react";
import { RefreshCw, Boxes } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";
const API_KEY = "nv-dev-key-00000000";

const STATE_BADGE: Record<string, string> = {
  READY:        "badge-green",
  ACTIVATING:   "badge-blue",
  PROVISIONING: "badge-blue",
  PREPARING:    "badge-yellow",
  ONBOARDING:   "badge-yellow",
  DEPRECATED:   "badge-gray",
  ERROR:        "badge-red",
};

const MOCK_MODELS = [
  { model_id: "llama3-8b",       hf_repo: "meta-llama/Meta-Llama-3-8B-Instruct",  dtype: "bfloat16", quantization: null,  context_window: 8192,  state: "READY", worker_count: 2, pricing_per_1m_tokens_usd: 0.20 },
  { model_id: "llama3-8b-fp8",   hf_repo: "meta-llama/Meta-Llama-3-8B-Instruct",  dtype: "float8",   quantization: "fp8", context_window: 8192,  state: "READY", worker_count: 2, pricing_per_1m_tokens_usd: 0.15 },
  { model_id: "llama3-8b-tp4",   hf_repo: "meta-llama/Meta-Llama-3-8B-Instruct",  dtype: "bfloat16", quantization: null,  context_window: 16384, state: "READY", worker_count: 4, pricing_per_1m_tokens_usd: 0.35 },
  { model_id: "llama70b-tp8",    hf_repo: "meta-llama/Meta-Llama-3-70B-Instruct", dtype: "bfloat16", quantization: null,  context_window: 32768, state: "PROVISIONING", worker_count: 8, pricing_per_1m_tokens_usd: 0.80 },
  { model_id: "tinyllama",       hf_repo: "TinyLlama/TinyLlama-1.1B-Chat-v1.0",  dtype: "float16",  quantization: null,  context_window: 2048,  state: "READY", worker_count: 1, pricing_per_1m_tokens_usd: 0.10 },
  { model_id: "llama3-8b-nvibe",   hf_repo: "meta-llama/Meta-Llama-3-8B-Instruct",  dtype: "bfloat16", quantization: null,  context_window: 2048,  state: "READY", worker_count: 1, pricing_per_1m_tokens_usd: 0.25 },
];

export default function ModelsPage() {
  const [models, setModels] = useState<any[]>(MOCK_MODELS);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const r = await fetch(`${API_URL}/v1/catalog`, { headers: { "X-API-Key": API_KEY } });
      const data = await r.json();
      if (data.data?.length) setModels(data.data);
    } catch {
      /* keep mock data */
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const ready = models.filter((m) => m.state === "READY").length;

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Summary strip */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Registered Models", value: models.length },
          { label: "Active / Ready",    value: ready },
          { label: "GPU Workers",       value: models.reduce((s, m) => s + (m.worker_count ?? 0), 0) },
        ].map((s) => (
          <div key={s.label} className="card p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
              <Boxes size={18} className="text-indigo-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-gray-800">All Models</h2>
          <button onClick={load} className="btn-secondary flex items-center gap-2 py-1.5">
            <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                {["Model ID", "HF Repository", "Precision", "Context", "Status", "Workers", "Price / 1M"].map((h) => (
                  <th key={h} className="table-header-cell">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {models.map((m) => (
                <tr key={m.model_id} className="table-row">
                  <td className="table-cell">
                    <code className="code-inline">{m.model_id}</code>
                  </td>
                  <td className="table-cell text-sm text-gray-500 max-w-[200px] truncate font-mono text-xs">
                    {m.hf_repo}
                  </td>
                  <td className="table-cell text-sm text-gray-600">
                    {m.dtype}{m.quantization ? ` / ${m.quantization}` : ""}
                  </td>
                  <td className="table-cell text-sm text-gray-600 font-mono">
                    {(m.context_window / 1024).toFixed(0)}K
                  </td>
                  <td className="table-cell">
                    <span className={STATE_BADGE[m.state] ?? "badge-gray"}>{m.state}</span>
                  </td>
                  <td className="table-cell text-sm text-gray-600 text-center">
                    {m.worker_count ?? 0}
                  </td>
                  <td className="table-cell text-sm font-semibold text-emerald-700">
                    ${m.pricing_per_1m_tokens_usd?.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
