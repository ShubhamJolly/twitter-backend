
const twit = require('twit');
const router = require('express').Router()

const client = new twit({
    consumer_key: process.env.TWITTER_CONSUMER_API_KEY || 'rOnY19TJm8xHHBYj6sxX6yC1j',
    consumer_secret: process.env.TWITTER_CONSUMER_API_SECRET || 'bITCkn7ISABz4W51QRL4WnSmI2apOVaDnxXnCneQMnlqKC4Dvh',
    access_token: process.env.TWITTER_ACCESS_TOKEN || '822669960694657024-kfmewnYGVMy3i7FPypbloZvadfEQo2x',
    access_token_secret: process.env.TWITTER_ACCESS_SECRET || 'YeLyUQJ7NlpnKCRmErqad7QSEYcaEdhXjmFPCXo0OJvJe',
    timeout_ms: 60 * 1000
})


// To get twitter search...
router.get('/search', async (req, res, next) => {
    try {

        var params = {
            qquery: '#100DaysOfCode since:20200606',
            count: 20
        };
        //const id = req.query.woeid
        const trends = await client.get('tweets/search/recent', params)
        res.send(trends)
    } catch (error) {
        console.log(error.message)
        next(error)
    }
})

module.exports = router