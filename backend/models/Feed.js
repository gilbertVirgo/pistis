const mongoose = require("mongoose");

module.exports = mongoose.model('Feed', new mongoose.Schema({ 
    title: String,
    video: String,
    category: String
}));