const express = require('express');
const router = express.Router();

const authors = [
    { id: 11111, name: 'Author1' },
    { id: 22222, name: 'Author2' },
];

router.get('/list', (req, res) => {
    const authors = [];
    res.render('authors', { authors: authors });
});

module.exports = router;