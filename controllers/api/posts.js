const Post = require('../../models/post')

module.exports = {
    index,
    show,
    create,
    delete: deletePost
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
        // const post = await Post.createPost(req.body)
        const post = await Post.create(req.body)
        res.json(post)
    } catch(error) {
        console.log(error)
        res.json(error)
    }
}

async function deletePost(req, res) {
    Post.findOne({
        'posts._id': req.params.id,
        'posts.user': req.user._id
    }).then ((post) => {
        if(!post) return 
    })
}

