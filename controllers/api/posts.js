const Post = require('../../models/post')

module.exports = {
    index,

}

async function index(req ,res) {
    const index = await Post.find({})
    res.json(index)
}



