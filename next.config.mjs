/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Static export: the whole site is pre-rendered HTML served from
   * Vercel's CDN. Without this, Vercel runs the app on a serverless
   * function that cold-starts after idle — the first visit can be
   * slow enough that the browser times out. With a static export
   * there is no function at all, so every page loads fast, every time.
   * next/image needs unoptimized: true because the image optimizer
   * is a server function that does not exist in a static export. */
  output: "export",
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;
