
const router = require('express').Router()
const twit = require('twit');

const responseList = require('./response');

const client = new twit({
    consumer_key: process.env.TWITTER_CONSUMER_API_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_API_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET,
    timeout_ms: 60 * 1000
})


// To get twitter search...
router.get('/search', async (req, res, next) => {
    try {
        var params = {
            query: req.query.search,
            count: 20
        };
        const trends = await client.get('tweets/search/recent', params)
        res.send(trends)
    } catch (error) {
        console.log(error.message)
        next(error)
    }
})

router.get('/search-dummy', (req, res, next) => {
    try {
        // preparing random data  of 3 from list 
        let finalResponse = []
        for (let inner = 0; inner < 3; inner++) {
            finalResponse.push(responseList[Math.floor(Math.random() * responseList.length)]);
        }
        res.send(finalResponse)
    } catch (error) {
        console.log(error.message)
        next(error)
    }
})

module.exports = router