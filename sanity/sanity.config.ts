import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { productSchema } from "./schema/product";
import { categorySchema } from "./schema/category";
import { reviewSchema } from "./schema/review";
import { bannerSchema } from "./schema/banner";
import { settingsSchema } from "./schema/settings";

export default defineConfig({
  name: "saisrini-jewellers",
  title: "Saisrini Jewellers — CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  schema: {
    types: [productSchema, categorySchema, reviewSchema, bannerSchema, settingsSchema],
  },
  plugins: [structureTool(), visionTool()],
});
