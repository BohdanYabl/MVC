const express = require('express');
const router = express.Router();

router.get('/author/list', (req, res) => {
    const authors = [
        { id: 11111, name: 'Author1' },
        { id: 22222, name: 'Author2' },
    ];
    res.render('authors', { authors: authors });
});

module.exports = router;