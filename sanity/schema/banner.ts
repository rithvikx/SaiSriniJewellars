import { defineField, defineType } from "sanity";

export const bannerSchema = defineType({
  name: "banner",
  title: "Hero Banner",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text" }),
    defineField({ name: "image", title: "Background Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "ctaText", title: "CTA Button Text", type: "string" }),
    defineField({ name: "ctaLink", title: "CTA Link", type: "string" }),
    defineField({ name: "isActive", title: "Active", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "title", media: "image" } },
});
