
const Post = require('../../models/post')

module.exports = {
    index,
    show,
    create,
    delete: deletePost
}

 async function deletePost(req, res) {
    // Check if user is logged in
    if (!req.user) return res.status(401).json({msg: 'Not Logged In'})
    try {
        // find desired post for deletion
        const postToDelete = await Post.findById(req.params.id);
        // check for current user to match post user
        if (!postToDelete.user.equals(req.user._id)) {
            return res.status(401).json({msg: 'Not Your Post to Delete'})
        }
        // delete post
        await Post.deleteOne(postToDelete)
        // post.save()
        res.status(201).json({msg: 'Post Deleted!'})
        // catch error
    }   catch (error) {
        res.error(error)
    }
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



// const postToDelete =  await Post.findById({
    // // find desired post for deletion
    // const post = await Post.findById(req.params.id);
    // // check for current user to match post user
    // if (!post.user.equals(req.user._id)) 
    //     return res.status(401).json({msg: 'Not Your Post to Delete'})
    // // remove post
    // post.remove(req.params.id).then(() => res.status(201).json({msg: 'Post Deleted!'}))
    // // catch error
    // .catch ((error) => {
    //     res.json(error)
    // })
//     'posts._id': req.params.id,
// });
// console.log(postToDelete)
    // }).then ((post) => {
    //     if(!post) return res.status(401).json({msg: 'Not Your Post to Delete'})
    //     post.remove(req.params.id)
    //     post.save().then(() => res.status(201).json({msg: 'Post Deleted!'}))
    // }).catch ((err) => {
    //     res.status(401).json({msg: 'Skipped Rest'})
    // })