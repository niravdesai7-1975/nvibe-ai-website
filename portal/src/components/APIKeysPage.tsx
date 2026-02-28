"use client";

import { useState } from "react";
import { Copy, Plus, Check, Key, ShieldCheck, Code2 } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";
const API_KEY = "nv-dev-key-00000000";

export default function APIKeysPage() {
  const [newKeyName, setNewKeyName] = useState("");
  const [createdKey, setCreatedKey] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createKey = async () => {
    if (!newKeyName.trim()) return;
    setCreating(true);
    setError(null);
    try {
      const r = await fetch(`${API_URL}/v1/keys`, {
        method: "POST",
        headers: { "X-API-Key": API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({ name: newKeyName.trim(), scopes: ["inference"] }),
      });
      const data = await r.json();
      if (data.key) {
        setCreatedKey(data.key);
        setNewKeyName("");
      } else {
        setError(data.error || "Failed to create key");
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setCreating(false);
    }
  };

  const copy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Dev key callout */}
      <div className="card p-5 border-l-4 border-indigo-500">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={16} className="text-indigo-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800">Development Key (pre-loaded)</p>
            <p className="text-xs text-gray-500 mt-0.5 mb-3">
              Rate: 600 RPM · Budget: unlimited · Scopes: inference
            </p>
            <div className="flex items-center gap-2">
              <code className="flex-1 text-xs text-gray-700 font-mono bg-gray-100 px-3 py-2 rounded-lg truncate">
                nv-dev-key-00000000
              </code>
              <button
                onClick={() => copy("nv-dev-key-00000000", "devkey")}
                className="btn-secondary flex items-center gap-1.5 text-xs py-2 flex-shrink-0"
              >
                {copied === "devkey" ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                {copied === "devkey" ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Create new key */}
      <div className="card p-6">
        <h2 className="section-title flex items-center gap-2">
          <Key size={16} className="text-indigo-500" />
          Create New Key
        </h2>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Key name (e.g. production-app)"
            value={newKeyName}
            onChange={(e) => setNewKeyName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && createKey()}
            className="input flex-1"
          />
          <button
            onClick={createKey}
            disabled={!newKeyName.trim() || creating}
            className="btn-primary flex items-center gap-2 whitespace-nowrap"
          >
            <Plus size={14} />
            {creating ? "Creating…" : "Create Key"}
          </button>
        </div>
        {error && (
          <p className="text-red-600 text-xs mt-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </p>
        )}
      </div>

      {/* Newly created key */}
      {createdKey && (
        <div className="card p-5 border border-emerald-200 bg-emerald-50">
          <div className="flex items-center gap-2 mb-3">
            <Check size={16} className="text-emerald-600" />
            <p className="text-sm font-semibold text-emerald-800">
              Key created — copy it now, it won&apos;t be shown again
            </p>
          </div>
          <div className="flex items-center gap-2">
            <code className="text-xs text-gray-700 font-mono bg-white border border-emerald-200 px-3 py-2 rounded-lg flex-1 break-all">
              {createdKey}
            </code>
            <button
              onClick={() => copy(createdKey, "newkey")}
              className="btn-primary flex items-center gap-1.5 text-xs flex-shrink-0"
            >
              {copied === "newkey" ? <Check size={12} /> : <Copy size={12} />}
              {copied === "newkey" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}

      {/* Quick start */}
      <div className="card p-6">
        <h2 className="section-title flex items-center gap-2">
          <Code2 size={16} className="text-indigo-500" />
          Quick Start — OpenAI SDK (drop-in replacement)
        </h2>
        <pre className="code-block text-sm leading-relaxed">{`from openai import OpenAI

client = OpenAI(
    base_url="${API_URL}/v1",
    api_key="nv-dev-key-00000000",
)

response = client.chat.completions.create(
    model="llama3-8b",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)`}</pre>
        <p className="text-xs text-gray-500 mt-3">
          100% compatible with the OpenAI Python SDK — swap your <code className="code-inline">base_url</code> and run.
        </p>
      </div>
    </div>
  );
}
