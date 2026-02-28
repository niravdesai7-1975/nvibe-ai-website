"use client";

import { useState, useRef } from "react";
import { Send, Loader2, Trash2, Sparkles, Bot, User } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";
const API_KEY = "nv-dev-key-00000000";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PRESETS = [
  { label: "Helpful assistant", value: "You are a helpful, accurate, and concise AI assistant." },
  { label: "Code expert",       value: "You are an expert software engineer. Provide clean, well-commented code and concise explanations." },
  { label: "Summarizer",        value: "You summarize text concisely. Respond with bullet points." },
];

export default function PlaygroundPage() {
  const [messages, setMessages]         = useState<Message[]>([]);
  const [input, setInput]               = useState("");
  const [model, setModel]               = useState("llama3-8b");
  const [systemPrompt, setSystemPrompt] = useState(SYSTEM_PRESETS[0].value);
  const [maxTokens, setMaxTokens]       = useState(256);
  const [temperature, setTemperature]   = useState(0.7);
  const [streaming, setStreaming]       = useState(true);
  const [loading, setLoading]           = useState(false);
  const [lastMetrics, setLastMetrics]   = useState<any>(null);
  const abortRef = useRef<AbortController | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setLastMetrics(null);

    const allMessages = [...messages, userMsg];
    const apiMessages = systemPrompt
      ? [{ role: "system", content: systemPrompt }, ...allMessages]
      : allMessages;

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      if (streaming) {
        const r = await fetch(`${API_URL}/v1/chat/completions`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-API-Key": API_KEY },
          body: JSON.stringify({ model, messages: apiMessages, max_tokens: maxTokens, temperature, stream: true }),
          signal: controller.signal,
        });

        const reader = r.body!.getReader();
        const decoder = new TextDecoder();
        let assistantContent = "";
        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          for (const line of chunk.split("\n")) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6);
            if (data === "[DONE]") break;
            try {
              const json = JSON.parse(data);
              const delta = json.choices?.[0]?.delta?.content ?? "";
              if (delta) {
                assistantContent += delta;
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = { role: "assistant", content: assistantContent };
                  return updated;
                });
              }
            } catch {}
          }
        }
        scrollToBottom();
      } else {
        const r = await fetch(`${API_URL}/v1/chat/completions`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-API-Key": API_KEY },
          body: JSON.stringify({ model, messages: apiMessages, max_tokens: maxTokens, temperature, stream: false }),
          signal: controller.signal,
        });
        const data = await r.json();
        setMessages((prev) => [...prev, { role: "assistant", content: data.choices?.[0]?.message?.content ?? data.error ?? "No response" }]);
        if (data.usage) setLastMetrics(data.usage);
        scrollToBottom();
      }
    } catch (e: any) {
      if (e.name !== "AbortError") {
        setMessages((prev) => [...prev, { role: "assistant", content: `Error: ${e.message}` }]);
      }
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  };

  return (
    <div className="flex gap-5 h-[calc(100vh-8rem)] max-w-6xl">
      {/* Settings panel */}
      <div className="w-64 flex-shrink-0 space-y-4 overflow-y-auto pb-2">
        {/* Model */}
        <div className="card p-5 space-y-4">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Sparkles size={15} className="text-indigo-500" />
            Model & Settings
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Model</label>
            <select value={model} onChange={(e) => setModel(e.target.value)} className="input">
              <option value="llama3-8b">llama3-8b</option>
              <option value="llama3-8b-fp8">llama3-8b-fp8</option>
              <option value="llama3-8b-tp4">llama3-8b-tp4</option>
              <option value="tinyllama">tinyllama</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">System Prompt</label>
            <select
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
              className="input mb-2"
            >
              {SYSTEM_PRESETS.map((p) => (
                <option key={p.label} value={p.value}>{p.label}</option>
              ))}
            </select>
            <textarea
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
              rows={3}
              className="input text-sm resize-none"
              placeholder="Custom system prompt…"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-sm font-medium text-gray-700">Max Tokens</label>
              <span className="text-xs font-mono text-gray-500">{maxTokens}</span>
            </div>
            <input
              type="range" min={32} max={2048} step={32}
              value={maxTokens}
              onChange={(e) => setMaxTokens(+e.target.value)}
              className="w-full accent-indigo-600"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-sm font-medium text-gray-700">Temperature</label>
              <span className="text-xs font-mono text-gray-500">{temperature}</span>
            </div>
            <input
              type="range" min={0} max={2} step={0.05}
              value={temperature}
              onChange={(e) => setTemperature(+e.target.value)}
              className="w-full accent-indigo-600"
            />
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-gray-100">
            <label className="text-sm font-medium text-gray-700">Streaming</label>
            <button
              onClick={() => setStreaming((s) => !s)}
              className={`w-10 h-5 rounded-full transition-colors relative ${streaming ? "bg-indigo-600" : "bg-gray-300"}`}
            >
              <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${streaming ? "left-5" : "left-0.5"}`} />
            </button>
          </div>
        </div>

        {/* Metrics */}
        {lastMetrics && (
          <div className="card p-4 space-y-2">
            <p className="text-sm font-semibold text-gray-700">Last Response</p>
            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Prompt tokens</span>
                <span className="font-mono font-medium">{lastMetrics.prompt_tokens}</span>
              </div>
              <div className="flex justify-between">
                <span>Completion tokens</span>
                <span className="font-mono font-medium">{lastMetrics.completion_tokens}</span>
              </div>
              <div className="flex justify-between border-t border-gray-100 pt-1 mt-1">
                <span className="font-medium">Total</span>
                <span className="font-mono font-medium">{lastMetrics.total_tokens}</span>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => { setMessages([]); setLastMetrics(null); }}
          className="btn-ghost w-full flex items-center justify-center gap-2 text-sm border border-gray-200"
        >
          <Trash2 size={13} />
          Clear Chat
        </button>
      </div>

      {/* Chat window */}
      <div className="flex-1 flex flex-col card overflow-hidden min-h-0">
        {/* Header */}
        <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2 flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-sm font-medium text-gray-700">{model}</span>
          <span className="text-xs text-gray-400 ml-auto">{messages.length > 0 ? `${messages.length} messages` : "Start a conversation"}</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3 pb-8">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
                <Bot size={24} className="text-indigo-500" />
              </div>
              <p className="text-gray-500 font-medium">Ready to chat with {model}</p>
              <p className="text-sm text-gray-400">Type a message below to get started</p>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot size={14} className="text-indigo-600" />
                </div>
              )}
              <div
                className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-indigo-600 text-white rounded-tr-sm"
                    : "bg-gray-100 text-gray-800 rounded-tl-sm"
                }`}
              >
                <pre className="whitespace-pre-wrap font-sans">{msg.content}</pre>
                {loading && i === messages.length - 1 && msg.role === "assistant" && (
                  <span className="inline-block w-1.5 h-4 bg-indigo-400 animate-pulse ml-0.5 rounded-sm" />
                )}
              </div>
              {msg.role === "user" && (
                <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <User size={14} className="text-gray-600" />
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-100 flex gap-3 flex-shrink-0">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
            }}
            placeholder="Type a message… (Enter to send, Shift+Enter for newline)"
            rows={2}
            className="input flex-1 resize-none text-sm"
          />
          <button
            onClick={loading ? () => abortRef.current?.abort() : send}
            disabled={!input.trim() && !loading}
            className={`px-5 rounded-xl transition-colors flex items-center gap-2 font-medium text-sm ${
              loading
                ? "bg-red-50 hover:bg-red-100 text-red-600 border border-red-200"
                : "btn-primary"
            } disabled:opacity-40`}
          >
            {loading ? (
              <><Loader2 size={14} className="animate-spin" /> Stop</>
            ) : (
              <><Send size={14} /> Send</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
