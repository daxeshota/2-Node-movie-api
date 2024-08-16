const express = require("express") 
const movieRoute = express.Router()
const { getAllMovies, addMovie, getMovieById, updateMovie, deleteMovie} = require("../controller/movies.controller")

movieRoute.get("/", getAllMovies)
movieRoute.post("/", addMovie)
movieRoute.get("/:id", getMovieById)
movieRoute.put("/:id", updateMovie)
movieRoute.delete("/:id", deleteMovie)



module.exports = movieRoute
