const prod = process.env.NODE_ENV === 'production'

module.exports = {
    env: {
        ProjectUrl: prod ? 'https://stm.raxo.dev/' : 'http://stm.test/',
    },
    target: 'serverless',
}

