/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactRemoveProperties: { properties: ["^data-testid$"] },
};

module.exports = nextConfig;
