const Post = require('../../models/post')

module.exports = {
    index,
    show,
    create
}

async function index(req ,res) {
    const index = await Post.find({})
    res.json(index)
}

async function show(req, res) {
    const post = await Post.findById(req.params.id)
    res.json(post)
}

async function create(req, res) {
    req.body.user = req.user._id
    req.body.userName = req.user.name
    try {
        const post = await Post.createPost(req.body)
        res.json(post)
    } catch(error) {
        console.log(error)
        res.json(error)
    }
}

