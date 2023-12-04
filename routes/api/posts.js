const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')

// all posts
// GET /api/posts
router.get('/', postsCtrl.index);
// single post path
// GET /posts/:id
router.get('/:id', postsCtrl.show)
// // create post
router.post('/new', postsCtrl.create)

module.exports = router