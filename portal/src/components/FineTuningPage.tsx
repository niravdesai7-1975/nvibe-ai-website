"use client";

import { useState } from "react";
import { Play, RefreshCw, Zap } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";
const API_KEY = "nv-dev-key-00000000";

const STATUS_BADGE: Record<string, string> = {
  queued:        "badge-blue",
  provisioning:  "badge-blue",
  running:       "badge-yellow",
  checkpointing: "badge-yellow",
  completed:     "badge-green",
  failed:        "badge-red",
  cancelled:     "badge-gray",
};

const DEFAULT_FORM = {
  model: "llama3-8b",
  training_file: "gs://my-bucket/datasets/instructions.jsonl",
  method: "lora",
  num_epochs: 3,
  lora_r: 16,
  lora_alpha: 32,
  learning_rate: 0.0002,
};

const MOCK_JOBS = [
  {
    id: "ft-a1b2c3d4e5f6",
    model: "llama3-8b",
    method: "lora",
    status: "completed",
    current_step: 1200,
    total_steps: 1200,
    current_loss: 0.0842,
    created_at: Date.now() / 1000 - 86400 * 3,
  },
  {
    id: "ft-9z8y7x6w5v4u",
    model: "llama3-8b-fp8",
    method: "lora",
    status: "running",
    current_step: 430,
    total_steps: 1200,
    current_loss: 0.2103,
    created_at: Date.now() / 1000 - 7200,
  },
];

export default function FineTuningPage() {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [jobs, setJobs] = useState<any[]>(MOCK_JOBS);
  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadJobs = async () => {
    setLoading(true);
    try {
      const r = await fetch(`${API_URL}/v1/fine-tuning/jobs`, { headers: { "X-API-Key": API_KEY } });
      const data = await r.json();
      if (Array.isArray(data) && data.length) setJobs(data);
    } catch {
      /* keep mock data */
    } finally {
      setLoading(false);
    }
  };

  const createJob = async () => {
    setCreating(true);
    setError(null);
    try {
      const r = await fetch(`${API_URL}/v1/fine-tuning/jobs`, {
        method: "POST",
        headers: { "X-API-Key": API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: form.model,
          training_file: form.training_file,
          method: form.method,
          hyperparameters: {
            num_epochs: form.num_epochs,
            lora_r: form.lora_r,
            lora_alpha: form.lora_alpha,
            learning_rate: form.learning_rate,
          },
        }),
      });
      const data = await r.json();
      if (data.id) {
        setJobs((prev) => [data, ...prev]);
      } else {
        setError(data.detail || "Failed to create job");
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Summary strip */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Jobs",    value: jobs.length },
          { label: "Running",       value: jobs.filter((j) => j.status === "running").length },
          { label: "Completed",     value: jobs.filter((j) => j.status === "completed").length },
        ].map((s) => (
          <div key={s.label} className="card p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
              <Zap size={18} className="text-indigo-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Create form */}
      <div className="card p-6 space-y-5">
        <h2 className="section-title flex items-center gap-2">
          <Play size={15} className="text-indigo-500" />
          New Fine-Tuning Job
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Base Model</label>
            <select
              value={form.model}
              onChange={(e) => setForm((f) => ({ ...f, model: e.target.value }))}
              className="input"
            >
              <option value="llama3-8b">llama3-8b</option>
              <option value="llama3-8b-fp8">llama3-8b-fp8</option>
              <option value="tinyllama">tinyllama</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Method</label>
            <select
              value={form.method}
              onChange={(e) => setForm((f) => ({ ...f, method: e.target.value }))}
              className="input"
            >
              <option value="lora">LoRA (recommended)</option>
              <option value="full">Full Fine-Tuning</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Training File (GCS URI)</label>
            <input
              type="text"
              value={form.training_file}
              onChange={(e) => setForm((f) => ({ ...f, training_file: e.target.value }))}
              className="input"
              placeholder="gs://bucket/data.jsonl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Epochs</label>
            <input
              type="number" min={1} max={50}
              value={form.num_epochs}
              onChange={(e) => setForm((f) => ({ ...f, num_epochs: +e.target.value }))}
              className="input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">LoRA rank (r)</label>
            <input
              type="number" min={1} max={256}
              value={form.lora_r}
              onChange={(e) => setForm((f) => ({ ...f, lora_r: +e.target.value }))}
              className="input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">LoRA alpha</label>
            <input
              type="number" min={1}
              value={form.lora_alpha}
              onChange={(e) => setForm((f) => ({ ...f, lora_alpha: +e.target.value }))}
              className="input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Learning Rate</label>
            <input
              type="number" step={0.0001}
              value={form.learning_rate}
              onChange={(e) => setForm((f) => ({ ...f, learning_rate: +e.target.value }))}
              className="input"
            />
          </div>
        </div>

        {error && (
          <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
        )}

        <div className="flex items-center gap-3 pt-1">
          <button
            onClick={createJob}
            disabled={creating}
            className="btn-primary flex items-center gap-2"
          >
            <Play size={14} />
            {creating ? "Submitting…" : "Start Training"}
          </button>
          <p className="text-xs text-gray-400">
            FSDP + LoRA · automatic checkpointing · model auto-registers on completion
          </p>
        </div>
      </div>

      {/* Jobs table */}
      <div className="card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-gray-800">Training Jobs</h2>
          <button onClick={loadJobs} className="btn-secondary flex items-center gap-2 py-1.5">
            <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              {["Job ID", "Model", "Method", "Status", "Progress", "Loss", "Created"].map((h) => (
                <th key={h} className="table-header-cell">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {jobs.map((j) => {
              const pct = j.total_steps ? Math.round((j.current_step / j.total_steps) * 100) : 0;
              return (
                <tr key={j.id} className="table-row">
                  <td className="table-cell">
                    <code className="code-inline">{j.id?.slice(0, 14)}…</code>
                  </td>
                  <td className="table-cell text-sm text-gray-700">{j.model}</td>
                  <td className="table-cell text-xs text-gray-500 uppercase font-medium">{j.method}</td>
                  <td className="table-cell">
                    <span className={STATUS_BADGE[j.status] ?? "badge-gray"}>{j.status}</span>
                  </td>
                  <td className="table-cell">
                    <div className="flex items-center gap-2 min-w-[100px]">
                      <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                        <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-gray-500 w-8 text-right">{pct}%</span>
                    </div>
                  </td>
                  <td className="table-cell text-sm font-mono text-gray-600">
                    {j.current_loss != null ? j.current_loss.toFixed(4) : "—"}
                  </td>
                  <td className="table-cell text-sm text-gray-500">
                    {j.created_at ? new Date(j.created_at * 1000).toLocaleDateString() : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
