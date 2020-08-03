const prod = process.env.NODE_ENV === 'production'
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withCss = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');

module.exports = withPlugins([
    [optimizedImages, {
    env: {
        ProjectUrl: prod ? 'https://stm.raxo.dev/' : 'http://stm.test/',
    },
    target: 'serverless',
    }],  
]);

module.exports = withCss(withPurgeCss())
