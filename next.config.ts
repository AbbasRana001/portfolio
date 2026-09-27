import type { NextConfig } from "next";

// Preserve this repository's hand-written AGENTS.md when running next dev.
const nextConfig: NextConfig = { agentRules: false };

export default nextConfig;
