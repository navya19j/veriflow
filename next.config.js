/** @type {import('next').NextConfig} */
const nextConfig = {
  // Polling avoids macOS "EMFILE: too many open files" from native file watchers
  // when the system file descriptor limit is tight (common with large node_modules).
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
