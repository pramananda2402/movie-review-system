const Genre = require("../models/gener")

exports.createGener = async(name) =>{
    return Genre.create(name)
}
exports.getGeners = async()=>{
    return Genre.findAll()
}