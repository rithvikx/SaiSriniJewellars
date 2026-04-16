import { defineField, defineType } from "sanity";

export const reviewSchema = defineType({
  name: "review",
  title: "Customer Review",
  type: "document",
  fields: [
    defineField({ name: "customerName", title: "Customer Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "rating", title: "Rating (1-5)", type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({ name: "reviewText", title: "Review", type: "text", validation: (Rule) => Rule.required() }),
    defineField({ name: "date", title: "Date", type: "date" }),
    defineField({ name: "isVisible", title: "Show on Website", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "customerName", subtitle: "reviewText" } },
});
