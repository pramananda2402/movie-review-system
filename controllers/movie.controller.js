
const movieService = require('../services/movie.service.js')
const userService = require('../services/user.service.js');

exports.createMovie = async(req,res) =>{
    try {
        const movie =await movieService.createMovie(req.body)
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.deleteMovie = async(req,res) =>{
    try {
        const title= req.params.title
        await movieService.deleteMovie(title)
        res.status(200).json({message: "movie deleted successfully"})
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateMovie = async(req,res) =>{
    try {
        const title = req.params.title
        const updatedMovie = req.body
        await movieService.updateMovie(title, updatedMovie)
        res.status(200).json({message: "movie updated successfully"})
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getAllMovies = async(req,res)=>{
    try {
        const movies = await movieService.getAllMovies()
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getMoviesByName = async(req,res) =>{
    try {
        const title = req.params.title
        const movies = await  movieService.getMoviesByName(title)
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getMoviesByGener = async(req,res) =>{
    try {
        const generName = req.body
        console.log(generName)
        const movies = await movieService.getMoviesByGener(generName)
        res.status(200).json(movies)
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.getMoviesByUser = async(req,res) =>{
    try {
        const username =req.params.name
  
        // const user = await userService.findUserByName(username)
        // console.log(user)
        const movies = await movieService.getMoviesByUser(username)
        res.status(200).json(movies)
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.getMoviesByRating = async(req,res) =>{
    console.log("object1")
    try {
        const movies= await movieService.getMoviesByRating()
        res.status(200).json(movies)
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getMoviesByUserByRating = async(req,res) =>{
    try {
        const username =req.params.name
        const user =await userService.findUserByName(username)
        const movies =await movieService.getMoviesByUserByRating(user.id)
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}