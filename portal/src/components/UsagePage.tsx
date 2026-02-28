"use client";

import { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, AreaChart, Area,
} from "recharts";
import { Activity, Zap, Cpu } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";
const API_KEY = "nv-dev-key-00000000";

const MOCK_MODELS = [
  { model_id: "llama3-8b",      request_count: 12_400, prompt_tokens: 3_800_000, completion_tokens: 4_440_000, total_tokens: 8_240_000, avg_latency_ms: 312, avg_tokens_per_second: 1842 },
  { model_id: "llama3-8b-fp8",  request_count: 7_800,  prompt_tokens: 2_100_000, completion_tokens: 3_080_000, total_tokens: 5_180_000, avg_latency_ms: 298, avg_tokens_per_second: 2140 },
  { model_id: "llama3-8b-tp4",  request_count: 3_200,  prompt_tokens: 1_100_000, completion_tokens: 1_810_000, total_tokens: 2_910_000, avg_latency_ms: 180, avg_tokens_per_second: 3210 },
  { model_id: "tinyllama",      request_count: 1_200,  prompt_tokens: 380_000,   completion_tokens: 600_000,   total_tokens: 980_000,   avg_latency_ms: 64,  avg_tokens_per_second: 4820 },
];

const MOCK_DAILY = Array.from({ length: 30 }, (_, i) => ({
  day: `${i + 1}`,
  requests: Math.round(750 + Math.abs(Math.sin(i) * 400)),
  tokens: Math.round(560_000 + Math.abs(Math.sin(i + 2) * 350_000)),
}));

export default function UsagePage() {
  const [usage, setUsage] = useState<any>(null);
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const r = await fetch(`${API_URL}/v1/usage?days=${days}`, { headers: { "X-API-Key": API_KEY } });
      setUsage(await r.json());
    } catch {
      setUsage(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, [days]);

  const models: any[] = (usage?.by_model?.length ? usage.by_model : MOCK_MODELS);
  const totalTokens  = models.reduce((s, m) => s + m.total_tokens, 0);
  const totalReqs    = models.reduce((s, m) => s + m.request_count, 0);

  const kpis = [
    { label: "Total Tokens",    value: (totalTokens / 1_000_000).toFixed(2) + "M", icon: Zap,      bg: "bg-amber-50",  color: "text-amber-500" },
    { label: "Total Requests",  value: totalReqs.toLocaleString(),                  icon: Activity,  bg: "bg-blue-50",   color: "text-blue-600" },
    { label: "Models Active",   value: String(models.length),                       icon: Cpu,       bg: "bg-purple-50", color: "text-purple-600" },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-center justify-end">
        <select value={days} onChange={(e) => setDays(+e.target.value)} className="input w-36">
          <option value={7}>Last 7 days</option>
          <option value={30}>Last 30 days</option>
          <option value={90}>Last 90 days</option>
        </select>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-4">
        {kpis.map((k) => {
          const Icon = k.icon;
          return (
            <div key={k.label} className="metric-card">
              <div className={`w-10 h-10 rounded-xl ${k.bg} flex items-center justify-center mb-4`}>
                <Icon size={18} className={k.color} />
              </div>
              <p className="text-2xl font-bold text-gray-900">{k.value}</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">{k.label}</p>
            </div>
          );
        })}
      </div>

      {/* Daily request area chart */}
      <div className="card p-6">
        <h2 className="section-title">Daily Request Volume ({days}d)</h2>
        <ResponsiveContainer width="100%" height={160}>
          <AreaChart data={MOCK_DAILY.slice(-days)} margin={{ top: 0, right: 8, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="reqGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey="day" stroke="#d1d5db" tick={{ fontSize: 10, fill: "#9ca3af" }} interval={4} />
            <YAxis stroke="#d1d5db" tick={{ fontSize: 10, fill: "#9ca3af" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, fontSize: 13 }}
            />
            <Area type="monotone" dataKey="requests" stroke="#4f46e5" strokeWidth={2} fill="url(#reqGrad)" name="Requests" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Token breakdown bar chart */}
      <div className="card p-6">
        <h2 className="section-title">Token Consumption by Model</h2>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={models} layout="vertical" margin={{ top: 0, right: 16, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" horizontal={false} />
            <XAxis type="number" stroke="#d1d5db" tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickFormatter={(v) => (v / 1_000_000).toFixed(1) + "M"} />
            <YAxis type="category" dataKey="model_id" stroke="#d1d5db" tick={{ fontSize: 11, fill: "#6b7280" }} width={130} />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, fontSize: 13 }}
              formatter={(v: any) => [(v / 1_000_000).toFixed(3) + "M tokens"]}
            />
            <Bar dataKey="total_tokens" fill="#4f46e5" radius={[0, 6, 6, 0]} name="Tokens" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed table */}
      <div className="card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Per-Model Breakdown</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              {["Model", "Requests", "Prompt Tokens", "Completion Tokens", "Avg Latency", "Avg TPS"].map((h) => (
                <th key={h} className="table-header-cell">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {models.map((m: any) => (
              <tr key={m.model_id} className="table-row">
                <td className="table-cell">
                  <code className="code-inline">{m.model_id}</code>
                </td>
                <td className="table-cell text-sm text-gray-700">{m.request_count?.toLocaleString()}</td>
                <td className="table-cell text-sm text-gray-600">{(m.prompt_tokens / 1000).toFixed(1)}K</td>
                <td className="table-cell text-sm text-gray-600">{(m.completion_tokens / 1000).toFixed(1)}K</td>
                <td className="table-cell text-sm font-mono text-gray-600">{m.avg_latency_ms?.toFixed(0)}ms</td>
                <td className="table-cell">
                  <span className="badge badge-green">{m.avg_tokens_per_second?.toFixed(0)} t/s</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
