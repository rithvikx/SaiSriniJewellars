import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyAdminToken } from "@/lib/admin-auth";
import { readProducts, writeProducts, slugify } from "@/lib/products-db";

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_session")?.value;
  return verifyAdminToken(token);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  const products = readProducts();
  const idx = products.findIndex((p) => p._id === id);

  if (idx === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  products[idx] = {
    ...products[idx],
    name: body.name,
    slug: { current: slugify(body.name) },
    images: body.images || [],
    weight: body.weight || undefined,
    purity: body.purity || undefined,
    price: body.price ? Number(body.price) : undefined,
    isNew: Boolean(body.isNew),
    isFeatured: Boolean(body.isFeatured),
    description: body.description || undefined,
    category: body.category || undefined,
    updatedAt: new Date().toISOString(),
  };

  writeProducts(products);
  return NextResponse.json(products[idx]);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const products = readProducts();
  const filtered = products.filter((p) => p._id !== id);

  if (filtered.length === products.length) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  writeProducts(filtered);
  return NextResponse.json({ ok: true });
}
