const movieModel = require("../model/movies.model")

const getAllMovies = async (req, res) => {

    const moviesList = await movieModel.find({})

    res.status(200).json({
        "status" : "success",
        "message" : "Movie List successfully",
        "data" : moviesList
    })

}

const getMovieById = async (req, res) => {

    const movieByID = await movieModel.findOne({ _id: req.params.id })
    if(!movieByID) throw "There is no movie with this id."
    res.status(200).json({
        "status" : "success",
        "message" : "Movie details loaded successfully",
        "data" : movieByID
    })

}

const addMovie = async (req, res) => {

    const { movie_name, description, rating } = req.body

    if(!movie_name) throw "Movie name is required."
    if(!rating) throw "Rating is required."
    if(rating < 1 || rating > 10) throw "Rating should be less than 10 and more than 1."

    const movie = await movieModel.create({
        movie_name : movie_name,
        description : description,
        rating : rating,
    })


    res.status(200).json({
        "status" : "success",
        "message" : "Movie added successfully"
    })

}

const updateMovie = async (req, res) => {

    const { movie_name, description, rating } = req.body

    if(!movie_name) throw "Movie name is required."
    if(!rating) throw "Rating is required."
    if(rating < 1 || rating > 10) throw "Rating should be less than 10 and more than 1."

    const movieByID = await movieModel.findOneAndUpdate({ _id: req.params.id }, {
        movie_name : movie_name,
        description : description, 
        rating : rating 
    })
    if(!movieByID) throw "There is no movie with this id."

    
    res.status(200).json({
        "status" : "success",
        "message" : "Movie details updated successfully",
        "data" : movieByID
    })

}

const deleteMovie = async (req, res) => {

    const movieByID = await movieModel.findOneAndDelete({ _id: req.params.id })
    if(!movieByID) throw "There is no movie with this id."
    res.status(200).json({
        "status" : "success",
        "message" : "Movie deleted successfully",
    })
}

module.exports = { getAllMovies, addMovie, getMovieById, updateMovie, deleteMovie }
