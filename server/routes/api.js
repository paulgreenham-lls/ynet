const express = require("express")
const router = express.Router()

const fakeNews = [
    {
        headline: "Random headline1",
        summary: "words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words"
    },
    {
        headline: "Random headline2",
        summary: "words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words"
    },
    {
        headline: "Random headline3",
        summary: "words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words"
    },
    {
        headline: "Random headline4",
        summary: "words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words"
    },
    {
        headline: "Random headline5",
        summary: "words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words"
    },
    {
        headline: "Random headline6",
        summary: "words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words"
    }
]

router.get("/newsfeed", function (req, res) {
    res.send(fakeNews)
})

module.exports = router