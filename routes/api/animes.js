const express = require('express')
const router = express.Router()
const animesCtrl = require('../../controllers/api/animes')

// all animes
// GET /api/animes
router.get('/', animesCtrl.index);
// single anime path
// GET /api/animes/:mal_id
router.get('/:mal_id', animesCtrl.show)
// create anime
// POST /api/animes/new
router.post('/new', animesCtrl.create)

module.exports = router;