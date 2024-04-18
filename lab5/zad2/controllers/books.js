const express = require('express');
const router = express.Router();

const books = [
    { id: 11111, name: 'Book1' },
    { id: 22222, name: 'Book2' },
];

router.get('/list', (req, res) => {
    const books = [];
    res.render('books', { books: books });
});

module.exports = router;