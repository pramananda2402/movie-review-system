const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie.controller.js')

router.post('/movies/create-movie', movieController.createMovie)
router.get('/movies/:title', movieController.getMoviesByName)
router.post('/movies/:title', movieController.deleteMovie)
router.put('/movies/:title', movieController.updateMovie)
router.get('/movies', movieController.getAllMovies)
router.post('/movies/gener',movieController.getMoviesByGener)
router.get('/movies/user/:name', movieController.getMoviesByUser)
router.get('/movies/rating', movieController.getMoviesByRating)
router.get('/movies/user/rating/:name', movieController.getMoviesByUserByRating)

module.exports=router