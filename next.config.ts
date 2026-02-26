import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    OST_GITHUB_ID: "Ov23liH2P2Ls0YZ4RKMa",
    OST_GITHUB_SECRET: "f6dfc2e5a359169e6e127c0dfda1974a000037f5",
    OST_REPO_SLUG: "outstaic_blogs",
    NEXTAUTH_SECRET: "your-random-super-secret-key-123456789",
  }
};

export default nextConfig;
