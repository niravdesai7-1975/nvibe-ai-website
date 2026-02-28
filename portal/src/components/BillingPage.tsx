"use client";

import { useEffect, useState } from "react";
import { DollarSign, TrendingDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";
const API_KEY = "nv-dev-key-00000000";

const MOCK_LINE_ITEMS = [
  { model_id: "llama3-8b",      total_tokens: 8_240_000, price_per_1m_tokens_usd: 0.20, estimated_cost_usd: 1.648 },
  { model_id: "llama3-8b-fp8",  total_tokens: 5_180_000, price_per_1m_tokens_usd: 0.15, estimated_cost_usd: 0.777 },
  { model_id: "llama3-8b-tp4",  total_tokens: 2_910_000, price_per_1m_tokens_usd: 0.35, estimated_cost_usd: 1.019 },
  { model_id: "tinyllama",      total_tokens: 980_000,   price_per_1m_tokens_usd: 0.10, estimated_cost_usd: 0.098 },
];

const MOCK_TOTAL = MOCK_LINE_ITEMS.reduce((s, i) => s + i.estimated_cost_usd, 0);

export default function BillingPage() {
  const [billing, setBilling] = useState<any>(null);
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/v1/billing/summary?days=${days}`, { headers: { "X-API-Key": API_KEY } })
      .then((r) => r.json())
      .then(setBilling)
      .catch(() => setBilling(null))
      .finally(() => setLoading(false));
  }, [days]);

  const lineItems: any[] = billing?.line_items?.length ? billing.line_items : MOCK_LINE_ITEMS;
  const totalCost = billing?.total_estimated_cost_usd ?? MOCK_TOTAL;

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-sm">Estimated costs based on token usage</p>
        <select value={days} onChange={(e) => setDays(+e.target.value)} className="input w-36">
          <option value={7}>Last 7 days</option>
          <option value={30}>Last 30 days</option>
          <option value={90}>Last 90 days</option>
        </select>
      </div>

      {/* Cost + savings KPIs */}
      <div className="grid grid-cols-2 gap-4">
        <div className="metric-card">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              <DollarSign size={18} className="text-emerald-600" />
            </div>
            <span className="badge badge-green text-xs">-8.3% vs prior</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">${totalCost.toFixed(2)}</p>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Estimated Cost ({days}d)</p>
          <p className="text-xs text-gray-400 mt-0.5">
            {lineItems.reduce((s: number, l: any) => s + l.total_tokens, 0).toLocaleString()} total tokens
          </p>
        </div>

        <div className="metric-card">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <TrendingDown size={18} className="text-blue-600" />
            </div>
            <span className="badge badge-blue text-xs">vs OpenAI GPT-4</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">92%</p>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Cost Savings</p>
          <p className="text-xs text-gray-400 mt-0.5">same workload on OpenAI: ~${(totalCost * 12.5).toFixed(0)}</p>
        </div>
      </div>

      {/* Cost breakdown bar chart */}
      <div className="card p-6">
        <h2 className="section-title">Cost by Model</h2>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={lineItems} layout="vertical" margin={{ top: 0, right: 16, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" horizontal={false} />
            <XAxis type="number" stroke="#d1d5db" tick={{ fontSize: 11, fill: "#9ca3af" }}
              tickFormatter={(v) => `$${v.toFixed(2)}`} />
            <YAxis type="category" dataKey="model_id" stroke="#d1d5db" tick={{ fontSize: 11, fill: "#6b7280" }} width={130} />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, fontSize: 13 }}
              formatter={(v: any) => [`$${Number(v).toFixed(4)}`]}
            />
            <Bar dataKey="estimated_cost_usd" fill="#4f46e5" radius={[0, 6, 6, 0]} name="Cost (USD)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line items table */}
      <div className="card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Line Items</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              {["Model", "Tokens", "Rate / 1M", "Cost (USD)", "% of Total"].map((h) => (
                <th key={h} className="table-header-cell">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lineItems.map((item: any) => (
              <tr key={item.model_id} className="table-row">
                <td className="table-cell">
                  <code className="code-inline">{item.model_id}</code>
                </td>
                <td className="table-cell text-sm text-gray-600">
                  {(item.total_tokens / 1_000_000).toFixed(2)}M
                </td>
                <td className="table-cell text-sm text-gray-600">
                  ${item.price_per_1m_tokens_usd?.toFixed(2)}
                </td>
                <td className="table-cell text-sm font-semibold text-emerald-700">
                  ${item.estimated_cost_usd?.toFixed(4)}
                </td>
                <td className="table-cell">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                      <div
                        className="bg-indigo-500 h-1.5 rounded-full"
                        style={{ width: `${(item.estimated_cost_usd / totalCost) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-10 text-right">
                      {((item.estimated_cost_usd / totalCost) * 100).toFixed(0)}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
            <tr className="bg-gray-50 border-t-2 border-gray-200">
              <td colSpan={3} className="px-4 py-3 text-sm font-semibold text-gray-800">Total</td>
              <td className="px-4 py-3 text-sm font-bold text-emerald-700">${totalCost.toFixed(4)}</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pricing reference */}
      <div className="card p-6">
        <h2 className="section-title">Pricing Reference</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["tinyllama",          "$0.10"],
            ["llama3-8b",          "$0.20"],
            ["llama3-8b-fp8",      "$0.15"],
            ["llama3-8b-tp4",      "$0.35"],
            ["llama70b-tp8-pp2",   "$0.80"],
            ["custom fine-tuned",  "$0.40"],
          ].map(([model, price]) => (
            <div key={model} className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5">
              <code className="text-sm text-gray-600">{model}</code>
              <span className="text-sm font-semibold text-emerald-700">{price} / 1M tokens</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
