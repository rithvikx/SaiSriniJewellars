"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const CATEGORIES = [
  "Bridal Jewellery", "Gold Chains", "Necklaces",
  "Earrings", "Bangles", "Rings", "Temple Jewellery", "Daily Wear",
];

const PURITIES = ["22KT", "18KT", "14KT", "24KT"];

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  images: string[];
  weight?: string;
  purity?: string;
  price?: number;
  isNew?: boolean;
  isFeatured?: boolean;
  description?: string;
  category?: { name: string; slug: { current: string } };
  createdAt: string;
  updatedAt: string;
}

const emptyForm = {
  name: "",
  weight: "",
  purity: "22KT",
  price: "",
  isNew: false,
  isFeatured: false,
  description: "",
  category: CATEGORIES[0],
  images: [""],
};

// ─── Styles ──────────────────────────────────────────────────────────────────

const s = {
  page: { minHeight: "100vh", background: "#0f0800", color: "#f5f0e8" } as React.CSSProperties,
  header: {
    background: "#1a0e08",
    borderBottom: "1px solid rgba(233,182,112,0.2)",
    padding: "0 2rem",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky" as const,
    top: 0,
    zIndex: 50,
  },
  main: { maxWidth: "1400px", margin: "0 auto", padding: "2rem" },
  card: {
    background: "#1a0e08",
    border: "1px solid rgba(233,182,112,0.15)",
    borderRadius: "6px",
    padding: "1.5rem",
  },
  input: {
    width: "100%",
    background: "#0f0800",
    border: "1px solid rgba(233,182,112,0.25)",
    borderRadius: "4px",
    color: "#f5f0e8",
    padding: "0.6rem 0.85rem",
    fontSize: "0.875rem",
    outline: "none",
    boxSizing: "border-box" as const,
  },
  label: { fontSize: "0.78rem", fontWeight: 600, color: "#E9B670", letterSpacing: "0.06em", marginBottom: "0.4rem", display: "block" },
  btnGold: {
    background: "linear-gradient(135deg, #E9B670, #C8973D)",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "0.65rem 1.25rem",
    fontSize: "0.85rem",
    fontWeight: 600,
    cursor: "pointer",
    letterSpacing: "0.04em",
  },
  btnGhost: {
    background: "transparent",
    color: "rgba(255,255,255,0.55)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "4px",
    padding: "0.65rem 1.25rem",
    fontSize: "0.85rem",
    cursor: "pointer",
  },
  btnDanger: {
    background: "transparent",
    color: "#f87171",
    border: "1px solid rgba(248,113,113,0.3)",
    borderRadius: "4px",
    padding: "0.4rem 0.75rem",
    fontSize: "0.78rem",
    cursor: "pointer",
  },
  btnEdit: {
    background: "rgba(233,182,112,0.1)",
    color: "#E9B670",
    border: "1px solid rgba(233,182,112,0.25)",
    borderRadius: "4px",
    padding: "0.4rem 0.75rem",
    fontSize: "0.78rem",
    cursor: "pointer",
  },
  overlay: {
    position: "fixed" as const, inset: 0,
    background: "rgba(0,0,0,0.7)",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
  modal: {
    background: "#1a0e08",
    border: "1px solid rgba(233,182,112,0.3)",
    borderRadius: "8px",
    padding: "2rem",
    width: "100%",
    maxWidth: "600px",
    maxHeight: "90vh",
    overflowY: "auto" as const,
  },
};

// ─── Login Screen ─────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      onLogin();
    } else {
      setError("Incorrect password. Try again.");
    }
  }

  return (
    <div style={{ ...s.page, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ ...s.card, width: "100%", maxWidth: "380px" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Image src="/ssl-logo.png" alt="Sai Srini Jewellers" width={120} height={45} style={{ objectFit: "contain", marginBottom: "1rem" }} />
          <h1 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#E9B670", margin: 0 }}>Admin Panel</h1>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginTop: "0.25rem" }}>Saisrini Jewellers</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label style={s.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            style={{ ...s.input, marginBottom: "1rem" }}
            autoFocus
          />
          {error && <p style={{ color: "#f87171", fontSize: "0.8rem", marginBottom: "0.75rem" }}>{error}</p>}
          <button type="submit" style={{ ...s.btnGold, width: "100%" }} disabled={loading}>
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Product Form Modal ───────────────────────────────────────────────────────

function ProductModal({
  initial,
  onClose,
  onSave,
}: {
  initial?: Product;
  onClose: () => void;
  onSave: (data: typeof emptyForm) => Promise<void>;
}) {
  const [form, setForm] = useState(
    initial
      ? {
          name: initial.name,
          weight: initial.weight || "",
          purity: initial.purity || "22KT",
          price: initial.price ? String(initial.price) : "",
          isNew: initial.isNew || false,
          isFeatured: initial.isFeatured || false,
          description: initial.description || "",
          category: initial.category?.name || CATEGORIES[0],
          images: initial.images.length ? initial.images : [""],
        }
      : { ...emptyForm }
  );
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<number | null>(null);
  const fileRefs = useRef<(HTMLInputElement | null)[]>([]);

  const set = (key: string, val: unknown) => setForm((f) => ({ ...f, [key]: val }));

  const setImage = (i: number, val: string) => {
    const imgs = [...form.images];
    imgs[i] = val;
    set("images", imgs);
  };

  async function uploadFile(i: number, file: File) {
    setUploading(i);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await res.json();
    setUploading(null);
    if (data.url) setImage(i, data.url);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return;
    setSaving(true);
    await onSave(form);
    setSaving(false);
  }

  return (
    <div style={s.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={s.modal}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <h2 style={{ margin: 0, fontSize: "1.2rem", color: "#E9B670" }}>
            {initial ? "Edit Product" : "Add New Product"}
          </h2>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: "1.4rem", lineHeight: 1 }}>×</button>
        </div>

        <form onSubmit={handleSave}>
          {/* Name */}
          <div style={{ marginBottom: "1rem" }}>
            <label style={s.label}>Product Name *</label>
            <input style={s.input} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="e.g. Royal Bridal Haar Set" required />
          </div>

          {/* Category + Purity row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div>
              <label style={s.label}>Category</label>
              <select style={{ ...s.input }} value={form.category} onChange={(e) => set("category", e.target.value)}>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={s.label}>Purity</label>
              <select style={{ ...s.input }} value={form.purity} onChange={(e) => set("purity", e.target.value)}>
                {PURITIES.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>

          {/* Weight + Price row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div>
              <label style={s.label}>Weight (e.g. 22g)</label>
              <input style={s.input} value={form.weight} onChange={(e) => set("weight", e.target.value)} placeholder="22g" />
            </div>
            <div>
              <label style={s.label}>Price ₹ (blank = Ask for Price)</label>
              <input style={s.input} type="number" value={form.price} onChange={(e) => set("price", e.target.value)} placeholder="185000" />
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: "1rem" }}>
            <label style={s.label}>Description</label>
            <textarea
              style={{ ...s.input, height: "72px", resize: "vertical" }}
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              placeholder="Brief product description…"
            />
          </div>

          {/* Toggles */}
          <div style={{ display: "flex", gap: "2rem", marginBottom: "1.25rem" }}>
            {[["isNew", "New Arrival"], ["isFeatured", "Featured"]].map(([key, label]) => (
              <label key={key} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: "0.875rem", color: "rgba(255,255,255,0.75)" }}>
                <input
                  type="checkbox"
                  checked={form[key as "isNew" | "isFeatured"]}
                  onChange={(e) => set(key, e.target.checked)}
                  style={{ accentColor: "#E9B670", width: "16px", height: "16px" }}
                />
                {label}
              </label>
            ))}
          </div>

          {/* Images */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={s.label}>Product Images</label>
            {form.images.map((img, i) => (
              <div key={i} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem", alignItems: "center" }}>
                {img && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={img} alt="" style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "3px", border: "1px solid rgba(233,182,112,0.2)", flexShrink: 0 }} />
                )}
                <input
                  style={{ ...s.input, flex: 1 }}
                  value={img}
                  onChange={(e) => setImage(i, e.target.value)}
                  placeholder="https://... or upload below"
                />
                <input
                  ref={(el) => { fileRefs.current[i] = el; }}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadFile(i, f); }}
                />
                <button
                  type="button"
                  onClick={() => fileRefs.current[i]?.click()}
                  style={{ ...s.btnGhost, padding: "0.5rem 0.75rem", fontSize: "0.75rem", whiteSpace: "nowrap", flexShrink: 0 }}
                >
                  {uploading === i ? "…" : "Upload"}
                </button>
                {form.images.length > 1 && (
                  <button
                    type="button"
                    onClick={() => set("images", form.images.filter((_, j) => j !== i))}
                    style={{ background: "none", border: "none", color: "#f87171", cursor: "pointer", fontSize: "1.2rem", lineHeight: 1, flexShrink: 0 }}
                  >×</button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => set("images", [...form.images, ""])} style={{ ...s.btnGhost, fontSize: "0.78rem", marginTop: "0.25rem" }}>
              + Add Image
            </button>
          </div>

          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
            <button type="button" onClick={onClose} style={s.btnGhost}>Cancel</button>
            <button type="submit" style={s.btnGold} disabled={saving}>
              {saving ? "Saving…" : initial ? "Save Changes" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Delete Confirm ───────────────────────────────────────────────────────────

function DeleteConfirm({ name, onConfirm, onCancel }: { name: string; onConfirm: () => void; onCancel: () => void }) {
  return (
    <div style={s.overlay}>
      <div style={{ ...s.modal, maxWidth: "380px" }}>
        <h2 style={{ color: "#f87171", marginTop: 0, fontSize: "1.1rem" }}>Delete Product?</h2>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
          &quot;{name}&quot; will be permanently deleted.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
          <button onClick={onCancel} style={s.btnGhost}>Cancel</button>
          <button onClick={onConfirm} style={{ ...s.btnGold, background: "linear-gradient(135deg,#ef4444,#b91c1c)" }}>Delete</button>
        </div>
      </div>
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<"add" | Product | null>(null);
  const [deleting, setDeleting] = useState<Product | null>(null);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/products");
    if (res.ok) setProducts(await res.json());
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function handleSave(data: typeof emptyForm) {
    const catSlug = data.category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const body = {
      ...data,
      price: data.price ? Number(data.price) : undefined,
      images: data.images.filter(Boolean),
      category: { name: data.category, slug: { current: catSlug } },
    };

    if (modal === "add") {
      await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } else if (modal && typeof modal === "object") {
      await fetch(`/api/admin/products/${modal._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }
    setModal(null);
    load();
  }

  async function handleDelete(p: Product) {
    await fetch(`/api/admin/products/${p._id}`, { method: "DELETE" });
    setDeleting(null);
    load();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    onLogout();
  }

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category?.name.toLowerCase().includes(search.toLowerCase())
  );

  const stats = {
    total: products.length,
    newArrivals: products.filter((p) => p.isNew).length,
    featured: products.filter((p) => p.isFeatured).length,
  };

  return (
    <div style={s.page}>
      {/* Header */}
      <header style={s.header}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Image src="/ssl-logo.png" alt="logo" width={80} height={30} style={{ objectFit: "contain" }} />
          <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", borderLeft: "1px solid rgba(255,255,255,0.15)", paddingLeft: "0.75rem" }}>Admin Panel</span>
        </div>
        <button onClick={logout} style={{ ...s.btnGhost, fontSize: "0.8rem" }}>Sign Out</button>
      </header>

      <main style={s.main}>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
          {[
            { label: "Total Products", value: stats.total, color: "#E9B670" },
            { label: "New Arrivals", value: stats.newArrivals, color: "#34d399" },
            { label: "Featured", value: stats.featured, color: "#a78bfa" },
          ].map((stat) => (
            <div key={stat.label} style={{ ...s.card, textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginTop: "0.25rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem", alignItems: "center", flexWrap: "wrap" }}>
          <input
            style={{ ...s.input, maxWidth: "300px" }}
            placeholder="Search products…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button style={{ ...s.btnGold, marginLeft: "auto" }} onClick={() => setModal("add")}>
            + Add Product
          </button>
        </div>

        {/* Table */}
        <div style={{ ...s.card, padding: 0, overflow: "hidden" }}>
          {loading ? (
            <div style={{ padding: "3rem", textAlign: "center", color: "rgba(255,255,255,0.3)" }}>Loading…</div>
          ) : filtered.length === 0 ? (
            <div style={{ padding: "3rem", textAlign: "center", color: "rgba(255,255,255,0.3)" }}>
              {search ? "No products match your search." : "No products yet. Add your first one!"}
            </div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(233,182,112,0.15)" }}>
                  {["Image", "Name", "Category", "Weight", "Purity", "Price", "Tags", "Actions"].map((h) => (
                    <th key={h} style={{ padding: "0.875rem 1rem", textAlign: "left", fontSize: "0.72rem", fontWeight: 600, color: "#E9B670", letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, i) => (
                  <tr key={p._id} style={{ borderBottom: i < filtered.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <td style={{ padding: "0.875rem 1rem" }}>
                      {p.images[0] ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={p.images[0]} alt="" style={{ width: "44px", height: "44px", objectFit: "cover", borderRadius: "4px" }} />
                      ) : (
                        <div style={{ width: "44px", height: "44px", background: "rgba(233,182,112,0.1)", borderRadius: "4px" }} />
                      )}
                    </td>
                    <td style={{ padding: "0.875rem 1rem" }}>
                      <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#f5f0e8" }}>{p.name}</div>
                      <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", marginTop: "0.2rem" }}>{p.slug.current}</div>
                    </td>
                    <td style={{ padding: "0.875rem 1rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>{p.category?.name || "—"}</td>
                    <td style={{ padding: "0.875rem 1rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>{p.weight || "—"}</td>
                    <td style={{ padding: "0.875rem 1rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>{p.purity || "—"}</td>
                    <td style={{ padding: "0.875rem 1rem", fontSize: "0.8rem", color: p.price ? "#f5f0e8" : "rgba(233,182,112,0.6)" }}>
                      {p.price ? `₹${p.price.toLocaleString("en-IN")}` : "Ask for Price"}
                    </td>
                    <td style={{ padding: "0.875rem 1rem" }}>
                      <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                        {p.isNew && <span style={{ fontSize: "0.65rem", fontWeight: 700, padding: "0.2rem 0.45rem", background: "rgba(52,211,153,0.15)", color: "#34d399", borderRadius: "3px" }}>NEW</span>}
                        {p.isFeatured && <span style={{ fontSize: "0.65rem", fontWeight: 700, padding: "0.2rem 0.45rem", background: "rgba(167,139,250,0.15)", color: "#a78bfa", borderRadius: "3px" }}>FEATURED</span>}
                      </div>
                    </td>
                    <td style={{ padding: "0.875rem 1rem" }}>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <button style={s.btnEdit} onClick={() => setModal(p)}>Edit</button>
                        <button style={s.btnDanger} onClick={() => setDeleting(p)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* Modals */}
      {modal !== null && (
        <ProductModal
          initial={typeof modal === "object" ? modal : undefined}
          onClose={() => setModal(null)}
          onSave={handleSave}
        />
      )}
      {deleting && (
        <DeleteConfirm
          name={deleting.name}
          onConfirm={() => handleDelete(deleting)}
          onCancel={() => setDeleting(null)}
        />
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/admin/products").then((r) => {
      setAuthed(r.ok);
    });
  }, []);

  if (authed === null) {
    return <div style={{ ...s.page, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.3)" }}>Loading…</div>;
  }

  if (!authed) {
    return <LoginScreen onLogin={() => setAuthed(true)} />;
  }

  return <Dashboard onLogout={() => setAuthed(false)} />;
}
