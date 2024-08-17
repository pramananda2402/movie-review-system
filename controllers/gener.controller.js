const generService = require('../services/gener.service.js')
exports.createGener = async (req,res) =>{
    try {
        const name = req.body 
        const gener = await generService.createGener(name)
        res.status(200).json(gener)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getGeners = async (req,res) =>{
    try {
        const geners = await generService.getGeners()
        res.status(200).json(geners)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}