const express = require("express")
const router = express.Router()

const fakeNews = [
    {
        headline: "Random headline1",
        date: new Date().toDateString(),
        summary: "words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words",
        image: "https://images1.ynet.co.il/PicServer5/2019/06/04/9287924/928790309916100640360no.jpg",
        url: "https://www.ynet.co.il/"
    },
    {
        headline: "Random headline2",
        date: new Date().toDateString(),
        summary: "words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words",
        image: "https://images1.ynet.co.il/PicServer5/2019/07/11/9357904/935752015588autoresize.jpg",
        url: "https://www.ynet.co.il/"
    },
    {
        headline: "Random headline3",
        date: new Date().toDateString(),
        summary: "words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words",
        image: "https://images1.ynet.co.il/PicServer5/2019/07/11/9357602/927843015588autoresize.jpg",
        url: "https://www.ynet.co.il/"
    },
    {
        headline: "Random headline4",
        date: new Date().toDateString(),
        summary: "words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words",
        image: "https://images1.ynet.co.il/PicServer5/2019/05/03/9223054/922291215588autoresize.jpg",
        url: "https://www.ynet.co.il/"
    },
    {
        headline: "Random headline5",
        date: new Date().toDateString(),
        summary: "words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words",
        image: "https://images1.ynet.co.il/PicServer5/2019/07/10/9356916/935680815588autoresize.jpg",
        url: "https://www.ynet.co.il/"
    },
    {
        headline: "Random headline6",
        date: new Date().toDateString(),
        summary: "words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words",
        image: "https://images1.ynet.co.il/PicServer5/2019/07/10/9356428/935640915588autoresize.jpg",
        url: "https://www.ynet.co.il/"
    }
]

router.get("/newsfeed", function (req, res) {
    res.send(fakeNews)
})

module.exports = router