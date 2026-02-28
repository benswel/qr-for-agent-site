import { useState } from "react";

type FormState = "idle" | "loading" | "error";

export default function UpgradeForm() {
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setError("");

    try {
      const res = await fetch("https://qr-agent-core-production.up.railway.app/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Redirect to Stripe Checkout
      window.location.href = data.checkout_url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full rounded-[var(--radius-md)] bg-[var(--color-foreground)] px-6 py-3 text-center text-sm font-medium text-[var(--color-background)] transition-colors hover:bg-[var(--color-foreground)]/90"
      >
        Upgrade to Pro
      </button>
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-2"
      >
        <input
          type="text"
          required
          autoFocus
          placeholder="qr_your-api-key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="min-w-0 flex-1 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-code-bg)] px-3 py-2 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-code-green)] focus:outline-none focus:ring-1 focus:ring-[var(--color-code-green)]"
          disabled={state === "loading"}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="w-full rounded-[var(--radius-md)] bg-[var(--color-foreground)] px-4 py-2 text-sm font-medium text-[var(--color-background)] transition-colors hover:bg-[var(--color-foreground)]/90 disabled:opacity-50"
        >
          {state === "loading" ? "Redirecting..." : "Upgrade"}
        </button>
      </form>

      {state === "error" && (
        <p className="mt-2 text-sm text-red-400">{error}</p>
      )}

      <p className="mt-2 text-xs text-[var(--color-muted-foreground)]">
        Enter your API key to start the upgrade. You'll be redirected to Stripe for payment.
      </p>
    </div>
  );
}
