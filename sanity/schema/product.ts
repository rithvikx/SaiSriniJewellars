import { defineField, defineType } from "sanity";

export const productSchema = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "weight",
      title: "Weight (e.g., 22g)",
      type: "string",
    }),
    defineField({
      name: "purity",
      title: "Purity (e.g., 22KT)",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price (₹) — leave empty to show 'Ask for Price'",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "occasion",
      title: "Occasions",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Bridal", value: "bridal" },
          { title: "Daily Wear", value: "daily" },
          { title: "Festivals", value: "festivals" },
          { title: "Gifting", value: "gifting" },
        ],
      },
    }),
    defineField({
      name: "isNew",
      title: "Mark as New Arrival",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Product",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", media: "images.0" },
  },
});
