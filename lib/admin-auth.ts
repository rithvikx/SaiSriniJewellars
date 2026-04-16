import crypto from "crypto";

export function getExpectedToken(): string {
  const password = process.env.ADMIN_PASSWORD || "admin123";
  const secret = process.env.ADMIN_SECRET || "saisrini-jewellers-secret";
  return crypto.createHmac("sha256", secret).update(password).digest("hex");
}

export function verifyAdminToken(token: string | undefined): boolean {
  if (!token) return false;
  return token === getExpectedToken();
}
