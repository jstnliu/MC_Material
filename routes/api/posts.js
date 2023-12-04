const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')

// all posts
// GET /api/posts
router.get('/', postsCtrl.index);

// // create post
// router.post('/', postsCtrl.addToFeed)