const router = require("express").Router();
//const mongoose = require("mongoose");

//const Feed = require("./models/Feed");

//mongoose.connect('mongodb://localhost:27017/pistis', {useNewUrlParser: true, useUnifiedTopology: true});

const items = [
    {
        category: "bible",
        title: "The Canaanite Problem",
        url: "https://www.youtube.com/watch?v=GxSZXBrxOEY"
    },
    {
        category: "bible",
        title: "Dinosaurs? ",
        url: "https://www.youtube.com/watch?v=8vyOM1N5TkQ"
    },
    {
        category: "bible",
        title: "Aren't there errors in the Bible? ",
        url: "https://www.youtube.com/watch?v=DB18or8bJ10"
    },
    {
        category: "god",
        title: "What is the Trinity? ",
        url: "https://www.youtube.com/watch?v=0G2S5ziDcO0"
    },
    {
        category: "god",
        title: "Evidence of Jesus' miracles? ",
        url: "https://www.youtube.com/watch?v=NE3eHohqQLQ"
    },
    {
        category: "god",
        title: "Is there even any evidence for God? ",
        url: "https://www.youtube.com/watch?v=5u7cm6OH9KM"
    },
    {
        category: "science",
        title: "Bible vs Evolution",
        url: "https://www.youtube.com/watch?v=yf5ovSpS2GU"
    },
    {
        category: "science",
        title: "Can science disprove God? ",
        url: "https://www.youtube.com/watch?v=0SY2EcOo1n0&list=PLU-nJq1k5wmhzlwg8XBgvyiGwSEgpXXhd&index=13&t=0s"
    },
    {
        category: "science",
        title: "Does the vastness of the universe prove naturalism? ",
        url: "https://www.youtube.com/watch?v=UEJGivuQ7as&list=PLU-nJq1k5wmhzlwg8XBgvyiGwSEgpXXhd&index=19&t=0s"
    },
]

router.get("/feed/:category", async ({params: {category}}, res) => {
    try {
        res.json({
            success: true, 
            items: items.filter(item => item.category === category)
        });
    } catch(error) {
        res.json({success: false, error: error.toString()});
    }
});

module.exports = router;