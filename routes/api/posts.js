const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')

// all posts
// GET /api/posts
router.get('/', postsCtrl.index);
// single post path
// GET /api/posts/:id
router.get('/:id', postsCtrl.show)
// create post
// POST /api/posts/new
router.post('/new', postsCtrl.create)

module.exports = router