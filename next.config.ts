import type { NextConfig } from "next";

function getLaravelImageRemotePattern() {
  const urlString =
    process.env.NEXT_PUBLIC_LARAVEL_HOSTING_URL ??
    process.env.LARAVEL_HOSTING_URL ??
    "http://localhost:8000";

  try {
    const url = new URL(urlString);
    return {
      protocol: url.protocol.replace(":", "") as "http" | "https",
      hostname: url.hostname,
      ...(url.port ? { port: url.port } : {}),
      pathname: "/storage/**",
    };
  } catch {
    return {
      protocol: "http" as const,
      hostname: "localhost",
      port: "8000",
      pathname: "/storage/**",
    };
  }
}

const nextConfig: NextConfig = {
  images: {
      unoptimized: true,

      remotePatterns: [getLaravelImageRemotePattern()],
  },
};

export default nextConfig;
