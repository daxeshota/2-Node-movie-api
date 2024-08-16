require('express-async-errors')
const express = require("express")
const mongoose = require("mongoose")
const errorHandler = require("./errorHandler/errorHandler")
const movieRoute = require("./routes/movies.route")

const app = express()
app.use(express.json())
require("dotenv").config()


mongoose.connect(process.env.MONGO_MOVIE_URL, {}).then(() => {
    console.log("mongodb connected sucesfully")
    app.listen(process.env.PORT, () => {
        console.log(`Server listening on Port ${process.env.PORT}`)
    })
}).catch((error) => {
    console.log(error)
})


app.use("/api/movies", movieRoute)


app.use(errorHandler)