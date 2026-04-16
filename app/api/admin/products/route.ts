import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyAdminToken } from "@/lib/admin-auth";
import { readProducts, writeProducts, slugify, DBProduct } from "@/lib/products-db";
import crypto from "crypto";

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_session")?.value;
  return verifyAdminToken(token);
}

export async function GET() {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(readProducts());
}

export async function POST(req: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const products = readProducts();

  const newProduct: DBProduct = {
    _id: crypto.randomUUID(),
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  products.unshift(newProduct);
  try {
    writeProducts(products);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 503 });
  }
  return NextResponse.json(newProduct, { status: 201 });
}
