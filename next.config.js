/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();

const nextConfig = withMDX({
    reactStrictMode: true,
});

module.exports = nextConfig;
