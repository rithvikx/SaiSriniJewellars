import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "products.json");

export interface DBProduct {
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

export function readProducts(): DBProduct[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw) as DBProduct[];
  } catch {
    return [];
  }
}

export function writeProducts(products: DBProduct[]): void {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
