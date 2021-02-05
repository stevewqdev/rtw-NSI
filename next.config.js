const prod = process.env.NODE_ENV === 'production'

module.exports = {
    // Target must be experimental-serverless-trace
    // Your build time will be longer with this option
    target: "serverless",
    webpack: (config, { isServer }) => {
        if (isServer) {
        require("./scripts/generate-sitemap");
        }

        return config;
    },
};