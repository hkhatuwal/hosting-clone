import crypto from "crypto";

function base64UrlEncode(buffer: Buffer | string): string {
  const buf = typeof buffer === "string" ? Buffer.from(buffer) : buffer;
  return buf
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function getLaravelHostingUrl(): string {
  const url = process.env.LARAVEL_HOSTING_URL;
  if (!url) {
    throw new Error("LARAVEL_HOSTING_URL is not configured");
  }
  return url.replace(/\/$/, "");
}

export function createSsoToken(clerkId: string, email: string): string {
  const secret = process.env.SSO_SECRET;
  if (!secret) {
    throw new Error("SSO_SECRET is not configured");
  }

  const ttl = Number(process.env.SSO_TOKEN_TTL ?? 60);

  const payload = {
    clerk_id: clerkId,
    email,
    exp: Math.floor(Date.now() / 1000) + ttl,
    nonce: crypto.randomBytes(16).toString("hex"),
  };

  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = crypto
    .createHmac("sha256", secret)
    .update(encodedPayload)
    .digest();

  return `${encodedPayload}.${base64UrlEncode(signature)}`;
}

export async function syncUserToHosting(user: {
  clerkId: string;
  name: string;
  email: string;
}) {
  const syncApiKey = process.env.SYNC_API_KEY;
  if (!syncApiKey) {
    throw new Error("SYNC_API_KEY is not configured");
  }

  const res = await fetch(`${getLaravelHostingUrl()}/api/users/sync`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${syncApiKey}`,
    },
    body: JSON.stringify({
      clerk_id: user.clerkId,
      name: user.name,
      email: user.email,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `User sync failed (${res.status})${body ? `: ${body}` : ""}`,
    );
  }

  return res.json();
}

export function buildSsoRedirectUrl(token: string): string {
  return `${getLaravelHostingUrl()}/auth/sso?token=${encodeURIComponent(token)}`;
}
