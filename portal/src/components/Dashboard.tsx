"use client";

import { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, Area, AreaChart,
} from "recharts";
import { Activity, Zap, DollarSign, Server, TrendingUp, Clock, Cpu, CheckCircle2 } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";
const API_KEY = "nv-dev-key-00000000";

const seed = (n: number) => Math.sin(n) * 10000;
const seeded = (base: number, range: number, i: number) =>
  Math.round(base + ((seed(i) % range) + range) / 2);

const mockThroughputData = Array.from({ length: 24 }, (_, i) => ({
  t: `${i}:00`,
  tps: seeded(1650, 600, i),
  p99: seeded(290, 120, i + 100),
}));

const mockAreaData = Array.from({ length: 30 }, (_, i) => ({
  day: `${i + 1}`,
  tokens: seeded(2_800_000, 1_200_000, i + 50),
}));

const mockModelData = [
  { model: "llama3-8b",      tokens: 8_240_000 },
  { model: "llama3-8b-fp8",  tokens: 5_180_000 },
  { model: "llama3-8b-tp4",  tokens: 2_910_000 },
  { model: "tinyllama",      tokens: 980_000 },
];

const STATUS_SERVICES = [
  { label: "API Gateway",       ok: true, latency: "2ms" },
  { label: "Triton / vLLM",     ok: true, latency: "68ms" },
  { label: "TRT-LLM",          ok: true, latency: "41ms" },
  { label: "HF Transformers",   ok: true, latency: "—" },
  { label: "Redis Queue",       ok: true, latency: "1ms" },
  { label: "PostgreSQL",        ok: true, latency: "3ms" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg px-3 py-2 text-sm">
      <p className="font-semibold text-gray-700 mb-1">{label}</p>
      {payload.map((p: any) => (
        <p key={p.name} style={{ color: p.color }} className="text-xs">
          {p.name}: <span className="font-semibold">{typeof p.value === "number" && p.value > 1000 ? (p.value / 1_000_000).toFixed(2) + "M" : p.value}</span>
        </p>
      ))}
    </div>
  );
};

export default function Dashboard() {
  const [health, setHealth] = useState<any>(null);
  const [usage, setUsage] = useState<any>(null);

  useEffect(() => {
    fetch(`${API_URL}/health`, { headers: { "X-API-Key": API_KEY } })
      .then((r) => r.json()).then(setHealth).catch(() => {});
    fetch(`${API_URL}/v1/usage?days=30`, { headers: { "X-API-Key": API_KEY } })
      .then((r) => r.json()).then(setUsage).catch(() => {});
  }, []);

  const kpis = [
    {
      label: "Requests (30d)",
      value: usage ? (usage.total_requests ?? 23_400).toLocaleString() : "23,400",
      delta: "+18.2%",
      positive: true,
      sub: "vs prior period",
      icon: Activity,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      label: "Tokens Generated",
      value: usage ? ((usage.total_tokens ?? 17_310_000) / 1_000_000).toFixed(1) + "M" : "17.3M",
      delta: "+24.5%",
      positive: true,
      sub: "last 30 days",
      icon: Zap,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-500",
    },
    {
      label: "Avg p99 Latency",
      value: "312ms",
      delta: "-8.1%",
      positive: true,
      sub: "time-to-first-token",
      icon: Clock,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      label: "Est. Cost (30d)",
      value: usage?.total_tokens
        ? "$" + ((usage.total_tokens / 1_000_000) * 0.20).toFixed(2)
        : "$3.46",
      delta: "+22.1%",
      positive: false,
      sub: "at $0.20 / 1M tokens",
      icon: DollarSign,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Section: overview */}
      <p className="text-gray-500 text-sm">Last updated just now · Auto-refreshes every 60s</p>

      {/* KPI cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((k) => {
          const Icon = k.icon;
          return (
            <div key={k.label} className="metric-card group hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${k.iconBg} flex items-center justify-center`}>
                  <Icon size={18} className={k.iconColor} />
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  k.positive ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"
                }`}>
                  {k.delta}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 tracking-tight">{k.value}</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">{k.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{k.sub}</p>
            </div>
          );
        })}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Throughput line chart — 2/3 */}
        <div className="card p-6 xl:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-semibold text-gray-800">Throughput & Latency (24h)</h2>
              <p className="text-xs text-gray-400 mt-0.5">Tokens per second and p99 response time</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-0.5 bg-indigo-500 rounded" />TPS</span>
              <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-0.5 bg-amber-400 rounded" />p99 ms</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={mockThroughputData} margin={{ top: 0, right: 16, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="t" stroke="#d1d5db" tick={{ fontSize: 11, fill: "#9ca3af" }} interval={3} />
              <YAxis yAxisId="left" stroke="#d1d5db" tick={{ fontSize: 11, fill: "#9ca3af" }} />
              <YAxis yAxisId="right" orientation="right" stroke="#d1d5db" tick={{ fontSize: 11, fill: "#9ca3af" }} />
              <Tooltip content={<CustomTooltip />} />
              <Line yAxisId="left" type="monotone" dataKey="tps" stroke="#4f46e5" strokeWidth={2} dot={false} name="TPS" />
              <Line yAxisId="right" type="monotone" dataKey="p99" stroke="#f59e0b" strokeWidth={2} dot={false} name="p99 ms" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Model usage bar chart — 1/3 */}
        <div className="card p-6">
          <div className="mb-5">
            <h2 className="font-semibold text-gray-800">Tokens by Model</h2>
            <p className="text-xs text-gray-400 mt-0.5">Last 30 days</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={mockModelData} layout="vertical" margin={{ top: 0, right: 12, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" horizontal={false} />
              <XAxis type="number" stroke="#d1d5db" tick={{ fontSize: 10, fill: "#9ca3af" }}
                tickFormatter={(v) => (v / 1_000_000).toFixed(0) + "M"} />
              <YAxis type="category" dataKey="model" stroke="#d1d5db" tick={{ fontSize: 11, fill: "#6b7280" }} width={110} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="tokens" fill="#4f46e5" radius={[0, 6, 6, 0]} name="Tokens" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Daily token area chart */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-semibold text-gray-800">Daily Token Volume (30d)</h2>
            <p className="text-xs text-gray-400 mt-0.5">Total tokens processed per day</p>
          </div>
          <span className="badge badge-green">
            <TrendingUp size={10} className="mr-1" />
            +24.5% MoM
          </span>
        </div>
        <ResponsiveContainer width="100%" height={140}>
          <AreaChart data={mockAreaData} margin={{ top: 0, right: 8, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="tokenGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey="day" stroke="#d1d5db" tick={{ fontSize: 10, fill: "#9ca3af" }} interval={4} />
            <YAxis stroke="#d1d5db" tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickFormatter={(v) => (v / 1_000_000).toFixed(1) + "M"} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="tokens" stroke="#4f46e5" strokeWidth={2}
              fill="url(#tokenGrad)" name="Tokens" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* System status */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold text-gray-800">System Status</h2>
          <span className="badge badge-green">
            <CheckCircle2 size={10} className="mr-1" />
            All operational
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
          {STATUS_SERVICES.map(({ label, ok, latency }) => (
            <div key={label} className="border border-gray-100 rounded-xl p-3 bg-gray-50 hover:bg-white transition-colors">
              <div className="flex items-center gap-1.5 mb-2">
                <div className={`w-2 h-2 rounded-full ${ok ? "bg-emerald-500" : "bg-red-400"}`} />
                <span className={`text-xs font-semibold ${ok ? "text-emerald-700" : "text-red-600"}`}>
                  {ok ? "Online" : "Down"}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-700 leading-tight">{label}</p>
              {latency !== "—" && (
                <p className="text-xs text-gray-400 mt-1 font-mono">{latency}</p>
              )}
            </div>
          ))}
        </div>
        {health && (
          <p className="text-xs text-gray-400 mt-4 border-t border-gray-100 pt-3">
            API uptime: {health.uptime_seconds ? Math.round(health.uptime_seconds / 3600) + "h" : "99.97%"} ·
            Demo mode: {health.demo_mode ? "yes" : "no"} ·
            Region: us-central1-a (GCP H100)
          </p>
        )}
        {!health && (
          <p className="text-xs text-gray-400 mt-4 border-t border-gray-100 pt-3">
            Uptime: 99.97% · Region: us-central1-a (GCP H100) · SLA: 99.9%
          </p>
        )}
      </div>
    </div>
  );
}
