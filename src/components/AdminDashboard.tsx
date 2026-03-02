import { useState, useEffect, useCallback } from "react";

const API_BASE = "https://qr-agent-core-production.up.railway.app";

interface Stats {
  users: {
    total: number;
    by_plan: Record<string, number>;
    signups_last_7d: number;
    active_last_7d: number;
  };
  qr_codes: { total: number };
  scans: { total: number; last_30d: number };
  webhooks: { total: number; deliveries_last_30d: number };
}

interface ApiKeyEntry {
  id: number;
  label: string;
  email: string | null;
  plan: string;
  createdAt: string;
  lastUsedAt: string | null;
}

type View = "login" | "dashboard";

export default function AdminDashboard() {
  const [view, setView] = useState<View>("login");
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);
  const [keys, setKeys] = useState<ApiKeyEntry[]>([]);

  const fetchData = useCallback(async (adminSecret: string) => {
    setLoading(true);
    setError("");

    try {
      const headers = { "X-Admin-Secret": adminSecret };

      const [statsRes, keysRes] = await Promise.all([
        fetch(`${API_BASE}/api/admin/stats`, { headers }),
        fetch(`${API_BASE}/api/admin/keys`, { headers }),
      ]);

      if (!statsRes.ok) {
        const data = await statsRes.json();
        throw new Error(data.error || "Authentication failed");
      }

      const statsData = await statsRes.json();
      const keysData = await keysRes.json();

      setStats(statsData);
      setKeys(keysData.keys);
      setView("dashboard");
      sessionStorage.setItem("admin_secret", adminSecret);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      sessionStorage.removeItem("admin_secret");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_secret");
    if (saved) {
      setSecret(saved);
      fetchData(saved);
    }
  }, [fetchData]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    fetchData(secret);
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_secret");
    setView("login");
    setStats(null);
    setKeys([]);
    setSecret("");
  }

  if (view === "login") {
    return (
      <div className="mx-auto max-w-sm">
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input
            type="password"
            required
            autoFocus
            placeholder="Admin secret"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-code-bg)] px-3 py-2 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-code-green)] focus:outline-none focus:ring-1 focus:ring-[var(--color-code-green)]"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-[var(--radius-md)] bg-[var(--color-foreground)] px-4 py-2 text-sm font-medium text-[var(--color-background)] transition-colors hover:bg-[var(--color-foreground)]/90 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => fetchData(secret)}
          disabled={loading}
          className="text-sm text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)] disabled:opacity-50"
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
        <button
          onClick={handleLogout}
          className="text-sm text-[var(--color-muted-foreground)] transition-colors hover:text-red-400"
        >
          Logout
        </button>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Total users" value={stats.users.total} />
        <StatCard
          label="Pro users"
          value={stats.users.by_plan.pro || 0}
          accent
        />
        <StatCard label="Signups (7d)" value={stats.users.signups_last_7d} />
        <StatCard label="Active (7d)" value={stats.users.active_last_7d} />
        <StatCard label="QR codes" value={stats.qr_codes.total} />
        <StatCard label="Scans (total)" value={stats.scans.total} />
        <StatCard label="Scans (30d)" value={stats.scans.last_30d} />
        <StatCard label="Webhooks" value={stats.webhooks.total} />
      </div>

      {/* API keys table */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-[var(--color-muted-foreground)]">
          API Keys ({keys.length})
        </h3>
        <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border)]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)] bg-[var(--color-muted)]">
                <th className="px-4 py-2 font-medium text-[var(--color-muted-foreground)]">ID</th>
                <th className="px-4 py-2 font-medium text-[var(--color-muted-foreground)]">Label</th>
                <th className="px-4 py-2 font-medium text-[var(--color-muted-foreground)]">Email</th>
                <th className="px-4 py-2 font-medium text-[var(--color-muted-foreground)]">Plan</th>
                <th className="px-4 py-2 font-medium text-[var(--color-muted-foreground)]">Created</th>
                <th className="px-4 py-2 font-medium text-[var(--color-muted-foreground)]">Last used</th>
              </tr>
            </thead>
            <tbody>
              {keys.map((k) => (
                <tr
                  key={k.id}
                  className="border-b border-[var(--color-border)] last:border-b-0"
                >
                  <td className="px-4 py-2 font-mono text-[var(--color-muted-foreground)]">{k.id}</td>
                  <td className="px-4 py-2">{k.label}</td>
                  <td className="px-4 py-2 text-[var(--color-muted-foreground)]">{k.email || "—"}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block rounded-[var(--radius-full)] px-2 py-0.5 text-xs font-medium ${
                        k.plan === "pro"
                          ? "bg-[var(--color-code-green)]/15 text-[var(--color-code-green)]"
                          : "bg-[var(--color-muted)] text-[var(--color-muted-foreground)]"
                      }`}
                    >
                      {k.plan}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-[var(--color-muted-foreground)]">
                    {formatDate(k.createdAt)}
                  </td>
                  <td className="px-4 py-2 text-[var(--color-muted-foreground)]">
                    {k.lastUsedAt ? formatDate(k.lastUsedAt) : "—"}
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

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-muted)] p-4">
      <p className="text-xs text-[var(--color-muted-foreground)]">{label}</p>
      <p
        className={`mt-1 text-2xl font-semibold ${
          accent ? "text-[var(--color-code-green)]" : "text-[var(--color-foreground)]"
        }`}
      >
        {value.toLocaleString()}
      </p>
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: d.getFullYear() !== new Date().getFullYear() ? "numeric" : undefined,
  });
}
