const prod = process.env.NODE_ENV === 'production'
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages, {
    env: {
        ProjectUrl: prod ? 'https://stm.raxo.dev/' : 'http://stm.test/',
    },
    target: 'serverless',
    }],  
]);