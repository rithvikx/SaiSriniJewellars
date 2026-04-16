import { CartItem } from "./cart-store";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";

export function buildWhatsAppMessage(
  items: CartItem[],
  name: string,
  requirement: string
): string {
  const lines = items.map(
    (i) =>
      `• ${i.name} x${i.quantity}${i.note ? ` (Note: ${i.note})` : ""}`
  );

  const message = [
    `Hello Saisrini Jewellers! 🙏`,
    ``,
    `I'm interested in the following items:`,
    ``,
    ...lines,
    ``,
    `My Name: ${name}`,
    `My Requirement: ${requirement}`,
    ``,
    `Please share pricing and availability. Thank you!`,
  ].join("\n");

  return encodeURIComponent(message);
}

export function buildSingleProductWhatsApp(productName: string): string {
  const message = encodeURIComponent(
    `Hello Saisrini Jewellers! 🙏\n\nI'm interested in: ${productName}\n\nPlease share pricing and availability.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function buildCartWhatsAppUrl(
  items: CartItem[],
  name: string,
  requirement: string
): string {
  const message = buildWhatsAppMessage(items, name, requirement);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
