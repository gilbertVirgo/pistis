const mongoose = require("mongoose");

module.exports = mongoose.model('Video', new mongoose.Schema({ 
    title: String,
    video: String,
    category: String
}));