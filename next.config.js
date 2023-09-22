/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();

const nextConfig = withMDX({
    output: "export",
    reactStrictMode: true,
});

module.exports = nextConfig;
