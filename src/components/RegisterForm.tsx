import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

interface RegisterResult {
  key: string;
  label: string;
  message: string;
}

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [result, setResult] = useState<RegisterResult | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setError("");

    try {
      const res = await fetch("https://api.qragentcore.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Registration failed");
      }

      const data = await res.json();
      setResult(data);
      setState("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  async function copyKey() {
    if (!result) return;
    await navigator.clipboard.writeText(result.key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (state === "success" && result) {
    return (
      <div className="mx-auto w-full max-w-2xl">
        {/* Terminal-style key display */}
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-code-bg)]">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/20"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/20"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/20"></div>
            <span className="ml-2 text-sm text-[var(--color-muted-foreground)]">
              Your API Key
            </span>
          </div>
          {/* Key content */}
          <div className="px-4 py-4">
            <div className="flex items-center justify-between gap-3">
              <code className="break-all font-mono text-[var(--text-code)] text-[var(--color-code-green)]">
                {result.key}
              </code>
              <button
                onClick={copyKey}
                className="shrink-0 rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-muted-foreground)] transition-colors hover:bg-[var(--color-muted)] hover:text-[var(--color-foreground)]"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-[var(--color-muted-foreground)]">
          {result.message}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 sm:flex-row"
      >
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-code-bg)] px-4 py-3 font-mono text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-code-green)] focus:outline-none focus:ring-1 focus:ring-[var(--color-code-green)]"
          disabled={state === "loading"}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="shrink-0 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-[var(--color-primary-foreground)] transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {state === "loading" ? "Creating..." : "Get API Key"}
        </button>
      </form>

      {state === "error" && (
        <p className="mt-3 text-center text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}
