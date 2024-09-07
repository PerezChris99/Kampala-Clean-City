const express = require('express');
const router = express.Router();
const ForumPostModel = require('../models/forumPost');

router.post('/', (req, res) => {
    // Logic to create and save forum posts
    const newPost = new ForumPostModel(req.body);
    newPost.save()
        .then(post => res.json(post))
        .catch(err => res.status(400).json({ error: err.message }));
});

module.exports = router;