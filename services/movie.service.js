const Genre = require("../models/gener");
const Movie = require("../models/movie");
const User = require("../models/user");

exports.createMovie = async (movieData) =>{
    return await Movie.create(movieData);
}
exports.deleteMovie = async(title)=>{
    return await  Movie.destroy({where: {title}})
}
exports.updateMovie = async(title, updatedMovie)=>{
    const movie = await Movie.findOne({where: {title}})
    if(movie){
        return await movie.update(updatedMovie)
    }
    else{
        throw new Error("User not found")
    }

}
exports.getAllMovies = async ()=>{
    
    return await Movie.findAll()
}
exports.getMoviesByName = async(title)=>{
    return await Movie.findOne({where: {title}})
}
exports.getMoviesByGener = async(generName)=>{
    const gener = await Genre.findOne({
        where: {
            name: generName
        }
    })
    if(gener){
        return await Movie.findAll({
            where: {type: gener.type}
        })
    }
    return []
}
exports.getMoviesByUser = async (name) => {
    const user = await User.findOne({
        where: {
            username: name
        }
    });

    if (!user) {
        return { message: "User does not exist" };
    }

    return await Movie.findAll({
        where: { userId: user.id }
    });
};

exports.getMoviesByRating = async () =>{
    console.log("object")
    return await Movie.findAll({
        order: [['rating', 'DESC']],
    })
}

exports.getMoviesByUserByRating = async(userId)=>{
    return await Movie.findAll({
        where: {userId},
        order: [['rating', 'DESC']],
    })
}
