const Anime = require('../../models/anime')

module.exports = {
    show,
    index,
    create
}

async function show(req, res) {
    const anime = await Anime.findOne({mal_id: req.params.mal_id})
    console.log(anime)  
    res.json(anime)
}

async function index(req, res) {
    const index = await Anime.find({})
    res.json(index)
}

async function create(req, res) {
    try {
        const anime = await Anime.create(req.body)
        res.json(anime)
    } catch(error) {
        console.log(error)
        res.json(error)
    }
}


