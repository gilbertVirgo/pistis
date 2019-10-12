const router = require("express").Router();
const mongoose = require("mongoose");

const Video = require("./models/Video");

mongoose.connect('mongodb://localhost:27017/pistis', {useNewUrlParser: true, useUnifiedTopology: true});

router.get("/videos", async ({query}, res) => {
    try {
        const videos = await Video.find(query);
    
        res.json({success: true, videos});
    } catch(error) {
        res.json({success: false, error: error.toString()});
    }
});

module.exports = router;