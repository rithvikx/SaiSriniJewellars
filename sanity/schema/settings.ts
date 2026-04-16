import { defineField, defineType } from "sanity";

export const settingsSchema = defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "whatsappNumber", title: "WhatsApp Number (with country code)", type: "string", initialValue: "919876543210" }),
    defineField({ name: "instagramHandle", title: "Instagram Handle", type: "string", initialValue: "saisrinijewellers" }),
    defineField({ name: "address", title: "Store Address", type: "text" }),
    defineField({ name: "phone", title: "Phone Number", type: "string" }),
    defineField({ name: "openingHours", title: "Opening Hours", type: "string" }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text" }),
  ],
  preview: { select: { title: "seoTitle" } },
  __experimental_actions: ["update", "publish"],
});
