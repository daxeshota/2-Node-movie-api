const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    movie_name : {
        type : String,
        required : [true, "Please enter movie_name"]
    },
    description : {
        type : String
    },
    rating : {
        type : Number,
        required : [true, "Please enter rating"]
    },
})

const movieModel = new mongoose.model("movies", movieSchema)

module.exports =  movieModel